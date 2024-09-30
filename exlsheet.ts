import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";
export class Chat extends Model {
    public id!: number;
    public message!: string;
    public userUd!: number;
}
Chat.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        sequelize,
        tableName: 'chats'
    })