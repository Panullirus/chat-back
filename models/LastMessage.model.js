import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class LastMessageModel extends Model { }

LastMessageModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true
    },
    contenido: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_usuario_envia: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'ultimoMensaje',
    timestamps: false,
});