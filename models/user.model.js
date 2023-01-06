import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class UserModel extends Model {}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true   
    },
    name: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    image_uri: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    chatsContainer: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    userID: {
        type: DataTypes.BOOLEAN,
        AllowNull: true,
    },
    user_to: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'User',
    timestamps: false,
});