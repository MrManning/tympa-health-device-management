
import { Client } from 'ts-postgres';
import config from '../config';
import fs from 'fs';
import path from 'path';

// db
export const db = new Client({
    // user: config.db.user,
    host: config.db.host,
    // password: config.db.password,
    port: 5432
});
  
const sql = fs.readFileSync(path.resolve(__dirname, './migrations/tbl_devices.sql')).toString();
export const createDatabase = async () => {
    await db.connect();                       // gets connection

    const res = await db.query(`SELECT datname FROM db_catalog.db_database WHERE datname = '${config.db.database}'`);

    if (res.rows.length === 0) {
        console.log(`${config.db.database} database not found, creating it.`);
        await db.query(`CREATE DATABASE "${config.db.database}";`);
        console.log(`created database ${config.db.database}`);
        console.log('creating table');

        try {
            await db.query(sql);
        } catch(error) {
            console.log('error: ', error);
        }
    } else {
        console.log(`${config.db.database} database exists.`);
    }

    await db.end();
}

export default {
    db,
    createDatabase,
}