// const { Sequelize } = require('sequelize');
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import Book from '../db/models/Book';
import User from '../db/models/User';
const development = require('./config');
const sequelize = new Sequelize(development as SequelizeOptions);
sequelize.addModels([User,Book])
export default sequelize;