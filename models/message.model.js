import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class MessageModels extends Model {}

MessageModels.init({
    message_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    from: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    chat: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    date: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'message',
    timestamps: false,
})