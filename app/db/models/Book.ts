'use strict';

import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, CreatedAt, DeletedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    paranoid: true,
    freezeTableName: true,
    modelName: 'book'
})
class Book extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!:number
    @Column(DataType.STRING)
    title!: string
    @Column(DataType.STRING)
    author!: string
    @Column(DataType.STRING)
    genre!: string
    @Column(DataType.DOUBLE)
    price!: number
    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date
    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date
    @DeletedAt
    @Column(DataType.DATE)
    deletedAt!: Date;  
}

export default Book;

// const { DataTypes } = require('sequelize');
// const sequelize = require('../../config/database');

// const book = sequelize.define(
//     'book',
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         title: DataTypes.STRING,
//         author: DataTypes.STRING,
//         genre: DataTypes.STRING,
//         price: DataTypes.DOUBLE,
//         createdAt: {
//             type: DataTypes.DATE,
//             allowNull: false,
//         },
//         updatedAt: {
//             type: DataTypes.DATE,
//             allowNull: false,
//         },
//         deletedAt: {
//             type: DataTypes.DATE,
//         },
//     },
//     {
//         modelName: 'book',
//         freezeTableName: true,
//         paranoid: true
//     }
// );

// module.exports = book;