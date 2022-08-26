import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class LanguajesModel extends Model {}

LanguajesModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true   
    },
    languaje: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    languaje_domain: {
        type: DataTypes.STRING(25),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'languajes',
    timestamps: false,
});