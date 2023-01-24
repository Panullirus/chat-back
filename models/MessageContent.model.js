import { DataTypes, Model } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class MessageContent extends Model {}

MessageContent.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_envio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_usuario_envia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    conversaciones_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'mensajes',
    timestamps: false,
});