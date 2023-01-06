import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const DatabaseConfig = new Sequelize({
    username: "root",
    password: null,
    database: "Chat",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: '-05:00',
    logging: false,
    pool: {
        max: 5,
        min: 5,
        acquire: 60000,
        idle: 15000
    }
});

export class Database{
    async conection(){
        try {
            await DatabaseConfig.authenticate()
            return {ok: true, message: 'La conexion a la base de datos ha sido correcta'}
        } catch (error) {
            return {ok: false, message: 'No se pudo hacer la conexión a la base de datos: ' + error}
        }
    }
}