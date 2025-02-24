const { Sequelize } = require('sequelize');
const development = require('./config');
const sequelize = new Sequelize(development);

const checkCon=async()=>{
    console.log('Checking database connection...');
    console.log('development ->', development)
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports = {checkCon, sequelize};