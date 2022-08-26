import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class TecnologiesModel extends Model {}

TecnologiesModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true   
    },
    tecnologie_name: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    tecnologie_domain: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
    },
    tecnologie_svg: {
        type: DataTypes.STRING(225),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'tecnologies',
    timestamps: false,
});