import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class ChatsContainerModel extends Model {}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true   
    },
    chatsContainer: {
        type: DataTypes.STRING(25),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'ChatContainer',
    timestamps: false,
});