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
    username: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    socket_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    online: {
        type: DataTypes.BOOLEAN,
        AllowNull: true,
    },
    avatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'users',
    timestamps: false,
});