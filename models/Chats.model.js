import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class ChatsModel extends Model {}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true   
    },
    chatForm: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    chatscontainerID: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    userID: {
        type: DataTypes.STRING(25),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'Chats',
    timestamps: false,
});