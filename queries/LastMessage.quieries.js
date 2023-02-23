import { LastMessageModel } from '../models/ChatsContainer.model.js'

class LastMessageQueries {
    async store(profile){
        try {
            const query = await LastMessageModel.create(profile);
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
            const query = await LastMessageModel.findAll({where: condition});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async findOne(condition = {}){
        try {
            const query = await LastMessageModel.findOne({where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async update(condition = {}, data = {}){
        try {
            const query = await LastMessageModel.update(condition, {where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async delete(condition = {}){
        try {
            const query = await LastMessageModel.destroy({where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }
}

export const lastMessageQueries = new LastMessageQueries();