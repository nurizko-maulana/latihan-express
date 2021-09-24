require('dotenv').config();

const{
  APP_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOSTNAME,
  DB_DIALECT,
  DB_PORT,
} = process.env;
module.exports={
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT,
    "port": DB_PORT,
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT,
    "port": DB_PORT,
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT,
    "port": DB_PORT,
  }
}
