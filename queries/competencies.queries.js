import {CompetenciesModel} from '../models/competencies.model.js';

class CompetenciesQueries {
    async store(competencies){
        try {
            const query = await CompetenciesModel.create(competencies);
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
            const query = await CompetenciesModel.findAll({where: condition});
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
            const query = await CompetenciesModel.findOne({where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async update(condition){
        try {
                const query = await CompetenciesModel.update({competencie: condition.competencie}, {where: {id: condition.id}});
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
            const query = await CompetenciesModel.destroy({where: {id: condition.id}});
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }
}

export const competenciesQueries = new CompetenciesQueries();