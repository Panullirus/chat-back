import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class ChatsContainerModel extends Model {}



ChatsContainerModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true   
    },
    MessageRoomsID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'ChatsContainer',
    timestamps: false,
});