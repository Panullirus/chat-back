import {ExperienceModel} from '../models/experience.model.js';

class ExperienceQueries {
    async store(experience){
        try {
            const query = await ExperienceModel.create(experience);
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
            const query = await ExperienceModel.findAll({where: condition});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async findOne(condition){
        try {
            const query = await ExperienceModel.findOne({where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async update(condition = {}){

        console.log("Desde update => ", condition)
        try {
            const query = await ExperienceModel.update(condition, {where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async delete(condition){
        console.log("Desde delete => ", condition)
        try {
            const query = await ExperienceModel.destroy({where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }
}

export const experienceQueries = new ExperienceQueries();