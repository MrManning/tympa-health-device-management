import { Client } from "ts-postgres";
import config from "../config";
import fs from "fs";
import path from "path";

const MIGRATIONS_FOLDER = path.resolve(__dirname, "./migrations");

const db = new Client({
  host: config.db.host,
  port: 5432,
});

const sortMigrationFiles = (migrationFolder: string): string[] => {
  const indexPosition = 3;
  const getMigrationIndex = (file: string): number => {
    const fileName = path.parse(file).name;
    return parseInt(fileName.substring(fileName.length - indexPosition));
  };

  return fs.readdirSync(migrationFolder).sort((firstFile, secondFile) => {
    const firstFileIndex: number = getMigrationIndex(firstFile);
    const secondFileIndex: number = getMigrationIndex(secondFile);
    return firstFileIndex - secondFileIndex;
  });
};

const getSqlQueries = (file: string): string[] => {
  return file
    .replace(/(\r\n|\n|\r)/gm, " ")
    .replace(/\s+/g, " ")
    .split(";")
    .map((query) => query.trim())
    .filter(Boolean);
};

const processSqlQueries = async (db: Client, queries: string[]) => {
  for (const query of queries) {
    await db.query(query);
  }
};

const processMigrations = async (db: Client, migrations: string[]) => {
  console.log(`Processing migrations.....`);

  for (const migration of migrations) {
    const migrationFile = fs.readFileSync(
      path.resolve(__dirname, MIGRATIONS_FOLDER, migration),
      "utf-8"
    );
    const queries = getSqlQueries(migrationFile);

    await processSqlQueries(db, queries);
  }

  console.log(`Migrations completed.`);
};

const createDatabase = async () => {
  db.connect();

  const results = await db.query(
    `SELECT FROM pg_database WHERE datname = '${config.db.database}'`
  );

  if (results.rows.length === 0) {
    console.log(
      `${config.db.database} database does not exist, creating database: ${config.db.database}.`
    );
    await db.query(`CREATE DATABASE "${config.db.database}";`);
  } else {
    console.log(`${config.db.database} database exists.`);
  }

  const migrations = sortMigrationFiles(MIGRATIONS_FOLDER);
  await processMigrations(db, migrations);
  db.end();
};

export { db, getSqlQueries, createDatabase };
