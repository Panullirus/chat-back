import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class CompetenciesModel extends Model {}

CompetenciesModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true   
    },
    competencie: {
        type: DataTypes.STRING(25),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'competencies',
    timestamps: false,
});