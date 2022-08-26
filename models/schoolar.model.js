import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class ScholarLineTimeModel extends Model {}

ScholarLineTimeModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true   
    },
    date_start: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    date_end: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    school: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    career: {
        type: DataTypes.STRING(15),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'scholar_line_time',
    timestamps: false,
});