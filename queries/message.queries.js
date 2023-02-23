import { MessageContent } from '../models/MessageContent.model.js'

class MessageContentQueries {
    async store(profile) {
        try {
            const query = await MessageContent.create(profile);
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
            const query = await MessageContent.findAll({ where: { conversaciones_id: condition.conversaciones_id } });
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null }
        }
    }

    async findOne(condition = {}) {
        try {
            const query = await MessageContent.findOne({ where: { id_usuario_2: condition.id_usuario_2 } });
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null }
        }
    }

    async update(condition = {}, data = {}) {
        try {
            const query = await MessageContent.update(condition, { where: { id: condition.id } });
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
            const query = await MessageContent.destroy({ where: { id: condition.id } });
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null }
        }
    }
}

export const messageContentQueries = new MessageContentQueries();