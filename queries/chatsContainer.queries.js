import { ChatsContainerModel } from '../models/ChatsContainer.model.js'

class ChatsContainerQueries {
    async store(profile){
        try {
            const query = await ChatsContainerModel.create(profile);
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
            const query = await ChatsContainerModel.findAll({where: condition});
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
            const query = await ChatsContainerModel.findOne({where: {id: condition.id}});
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
            const query = await ChatsContainerModel.update(condition, {where: {id: condition.id}});
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
            const query = await ChatsContainerModel.destroy({where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }
}

export const chatsContainerQueries = new ChatsContainerQueries();