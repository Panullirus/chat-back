import { UserModel } from "../models/user.model.js";

class userQueries {
    async store(user){
        try {
            const query = await UserModel.create(user);
            if(query){
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: 'error al ejecutar query'}
        }
    }

    async find(condition){
        try {
            const query = await UserModel.findOne({where: {username: condition.username}});
            if(query){
                return {ok: true, data: query}
            }else{
                return {ok: false, data: null}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }

    async findOne(condition){
        //console.log("Condicion => ", condition)
        try {
            const query = await UserModel.findOne({where: {username: condition.username, password: condition.password}});
            if(query){
                console.log({ok: true, data: query})
                return {ok: true, data: query}
            }
        }catch(e){
            console.log('error al ejecutar query', e);
            return {ok: false, data: null}
        }
    }
}

export const UserQueries = new userQueries();