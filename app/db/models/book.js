'use strict';

import { DataTypes } from 'sequelize';
import db from '../../config/database.js';

const book = db.sequelize.define(
    'book',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        genre: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        modelName: 'book',
        freezeTableName: true,
        paranoid: true
    }
);

export default book;