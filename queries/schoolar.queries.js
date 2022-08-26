import {ScholarLineTimeModel} from '../models/schoolar.model.js';

class SchoolarQueries {
    async store(schoolar){
        try {
            const query = await ScholarLineTimeModel.create(schoolar);
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
            const query = await ScholarLineTimeModel.findAll({where: condition});
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
            const query = await ScholarLineTimeModel.findOne({where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async update(condition){
        console.log("condition ", condition)
        try {
            const query = await ScholarLineTimeModel.update(condition, {where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async delete(condition){
        try {
            const query = await ScholarLineTimeModel.destroy({where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }
}

export const schoolarQueries = new SchoolarQueries();