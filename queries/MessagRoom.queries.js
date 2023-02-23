import sequelize from 'sequelize';
import { Op } from 'sequelize';
import { MessageRoom } from '../models/MessageRoom.model.js'

class MessageRoomQueries {
    async store(profile) {
        try {
            const query = await MessageRoom.create(profile);
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: 'error al ejecutar query' }
        }
    }

    async find(condition = {}) {
        try {
            const query = await MessageRoom.findAll({ where: condition });
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null }
        }
    }

    async findOne(condition = {}) {

        console.log("ids => ", condition)

        try {
            const query = await MessageRoom.findOne({
                where: {
                    [Op.or]: [
                        { id_usuario_1: condition.id_usuario_1, id_usuario_2: condition.id_usuario_2 },
                        { id_usuario_1: condition.id_usuario_2, id_usuario_2: condition.id_usuario_1 }
                    ]
                },
            })
            
            if(query){
                return { ok: true, data: query } 
            }else{
                return { ok: false, data: null }
            }

        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null }
        }
    }

    async update(condition = {}, data = {}) {
        try {
            const query = await MessageRoom.update(condition, { where: { id: condition.id } });
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null }
        }
    }

    async delete(condition = {}) {
        try {
            const query = await MessageRoom.destroy({ where: { id: condition.id } });
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null }
        }
    }
}

export const messageRoomQueries = new MessageRoomQueries();