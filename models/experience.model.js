import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class ExperienceModel extends Model {}

ExperienceModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true   
    },
    job: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    work_station: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    date_start: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    date_end: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'experience',
    timestamps: false,
});