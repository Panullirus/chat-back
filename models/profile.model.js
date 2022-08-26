import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class ProfileModel extends Model {}

ProfileModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: null   
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING(225),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'profile',
    timestamps: false,
});