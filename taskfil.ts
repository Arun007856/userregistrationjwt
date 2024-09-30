import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";
export class Task extends Model {
    public id!: number;
    public title!: string;
    public status!: string;
}
Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending'
    },
},
    {
        sequelize,
        tableName: 'users'
    }
)