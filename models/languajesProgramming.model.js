import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class ProgramingLanguajeModel extends Model {}

ProgramingLanguajeModel.init({
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
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    languaje_svg: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'programing_languajes',
    timestamps: false,
});