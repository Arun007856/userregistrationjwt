import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";
export class User extends Model {
    public username!: string;
    public password!: string;
    public email!: string;
    public id!: number;
} 

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        tableName: 'users'
    }
)