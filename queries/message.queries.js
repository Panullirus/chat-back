import { MessageModels } from '../models/message.model.js';

class MessageQueries {
    async store(message){
        try {
            const query = await MessageModels.create(message);
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: 'error al ejecutar query'}
        }
    }

    async find(condition = {}){
        try {
            const query = await MessageModels.findAll({where: condition});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }
}

export const messageQueries = new MessageQueries();