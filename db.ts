import { Sequelize } from "sequelize";
// import dotenv from 'dotenv'
// dotenv.config();
export const sequelize = new Sequelize(''
    , {
        dialect: 'postgres',
        logging: false
    }
);
export const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('connected to database')
    } catch (error) {
        console.log('Unable to connect to the database:' + error)
    }
}