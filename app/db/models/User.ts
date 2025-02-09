'use strict';
import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, CreatedAt, DeletedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
    paranoid: true,
    freezeTableName: true,
    modelName: 'user'
})
class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!:number
    @Column(DataType.STRING)
    username!: string
    @Column(DataType.STRING)
    password!: string
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

export default User;