import pool from "../db/index.js";
import pg from "pg";
const { Client } = pg;

var table_users = `CREATE TABLE IF NOT EXISTS UserTable (
  userid SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  theme INTEGER,
  state VARCHAR(255)
  );`;
var table_user_profile = `CREATE TABLE IF NOT EXISTS UserProfileTable (
  userid INTEGER PRIMARY KEY,
  propic VARCHAR(255),
  bio VARCHAR(255),
  workhistory VARCHAR(255),
  education VARCHAR(255),
  linkedin VARCHAR(255),
  github VARCHAR(255),
  twitterx VARCHAR(255),
  certifications VARCHAR(255),
  CONSTRAINT fk_user
      FOREIGN KEY(userid) 
      REFERENCES UserTable(userid)
      ON DELETE CASCADE
  );`;
var table_projects = `CREATE TABLE IF NOT EXISTS ProjectTable (
  projectid SERIAL PRIMARY KEY,
  userid INTEGER,
  projectname VARCHAR(255),
  projectdesc VARCHAR(255),
  projecturl VARCHAR(255),
  projectimg VARCHAR(255),
  CONSTRAINT fk_user_project
      FOREIGN KEY(userid) 
      REFERENCES UserTable(userid)
      ON DELETE CASCADE
  );`;
var table_messages = `CREATE TABLE IF NOT EXISTS MessageTable (
  messageid SERIAL PRIMARY KEY,
  userid INTEGER,
  message VARCHAR(255),
  CONSTRAINT fk_user_project
    FOREIGN KEY(userid) 
    REFERENCES UserTable(userid)
    ON DELETE CASCADE
)`;
var table_portfolios = `CREATE TABLE IF NOT EXISTS PortfolioTable (
  userid INTEGER,
  image VARCHAR(255),
  CONSTRAINT fk_user_project
    FOREIGN KEY(userid) 
    REFERENCES UserTable(userid)
    ON DELETE CASCADE
)`;
var capstone_db_user = `CREATE ROLE capstone_db_user WITH
  LOGIN
  SUPERUSER
  CREATEDB
  CREATEROLE
  INHERIT
  REPLICATION
  BYPASSRLS
  CONNECTION LIMIT -1
  PASSWORD 'capstone'
  ;`;
  

//Checks for the existence of the database user and creates it if not found. Uses the default
//postgres credentials that would be entered during installation; this might have to be changed accordingly
async function checkForDatabaseUser() {
  console.log("Checking capstone_db_user exists...");

  const client = new Client({
    host: process.env.DB_HOST,
    database: "postgres",
    user: "postgres",
    password: "1",
    port: 5432,
  });

  try {
    await client.connect();
    await client.query(capstone_db_user);
    console.log("Created capstone_db_user");
  } catch (error) {
    if (error.code === "42710") {
      console.log("capstone_db_user already exists");
    } else {
      console.error('Error creating user "postuser"', error);
    }
  } finally {
    client.end();
  }
}

//Checks for the existence of the database and creates it if not found. Had to create a seperate
//connection using the default postgres database since I couldn't figure out how to connect without
//an existing one, so it uses the default that should be present on a postgres installation
async function checkForDatabase() {
  console.log("Checking if capstone_db exists...");

  const client = new Client({
    host: process.env.DB_HOST,
    database: "postgres",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
  });

  try {
    await client.connect();
    const res = await client.query(
      `SELECT datname FROM pg_catalog.pg_database WHERE datname = '${process.env.DB_NAME}'`,
    );
    if (res.rowCount === 0) {
      console.log(`${process.env.DB_NAME} database does not exist.`);
      await client.query(`CREATE DATABASE "${process.env.DB_NAME}";`);
      console.log(
        `Created test database using capsonte_db_user credentials: ${process.env.DB_NAME}.`,
      );
    } else {
      console.log(`${process.env.DB_NAME} database already exists.`);
    }
    client.end();
  } catch (error) {
    console.error("Error creating database:", error);
  } finally {
    await client.end();
  }
}

//Creates database and tables if they don't exist
const init = async () => {
  console.log("Attempting to setup database...");
  await checkForDatabaseUser();
  await checkForDatabase();
  const pooling = await pool.connect();
  try {
    console.log("Creating necessary tables...");
    await pooling.query("BEGIN");
    await pooling.query(table_users);
    await pooling.query("COMMIT");
    await pooling.query("BEGIN");
    await pooling.query(table_user_profile);
    await pooling.query("COMMIT");
    await pooling.query("BEGIN");
    await pooling.query(table_projects);
    await pooling.query("COMMIT");
    await pooling.query("BEGIN");
    await pooling.query(table_messages);
    await pooling.query("COMMIT");
    await pooling.query("BEGIN");
    await pooling.query(table_portfolios);
    await pooling.query("COMMIT");
    console.log("Table creation complete.");
  } catch (error) {
    await pooling.query("ROLLBACK");
    console.error("Table creation failure:", error);
  } finally {
    pooling.release();
  }
  console.log("Database creation complete.");
};

export default init;
