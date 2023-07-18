import { Client } from "ts-postgres";
import config from "../config";
import fs from "fs";
import path from "path";

// db
export const db = new Client({
  host: config.db.host,
  port: 5432,
});

const sqlFile = fs.readFileSync(
  path.resolve(__dirname, "./migrations/tbl_devices.sql"),
  "utf-8"
);

export const createDatabase = async () => {
  await db.connect();

  const results = await db.query(
    `SELECT FROM pg_database WHERE datname = '${config.db.database}'`
  );
  if (results.rows.length === 0) {
    console.log(`${config.db.database} database not found, creating it.`);
    await db.query(`CREATE DATABASE "${config.db.database}";`);
  } else {
    console.log(`${config.db.database} database exists.`);
  }

  const queries = sqlQueries(sqlFile);
  await processSqlQueries(db, queries);
  await db.end();
};

const sqlQueries = (file: string): string[] => {
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

export default {
  db,
  createDatabase,
};
