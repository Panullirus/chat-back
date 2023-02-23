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
    uidGoogle: {
        type: DataTypes.STRING,
        allowNull: true  
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_connection:{
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'usuarios',
    timestamps: false,
});