import sequelize from "sequelize";
import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class UserModel extends Model {}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_connection:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'usuarios',
    timestamps: false,
});