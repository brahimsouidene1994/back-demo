require('dotenv').config({path: '.env'})
const development = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: 'localhost',
    dialect: 'postgres',
    logging: false
}

module.exports = development;