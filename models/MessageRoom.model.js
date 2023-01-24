import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";
import { UserModel } from '../models/user.model.js'

export class MessageRoom extends Model {}

MessageRoom.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario_1: {
        type: DataTypes.INTEGER,
        references: {
          model: UserModel,
          key: 'id'
        }
    },
    id_usuario_2: {
        type: DataTypes.INTEGER,
        references: {
          model: UserModel,
          key: 'id'
        }
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'conversaciones',
    timestamps: false,
});