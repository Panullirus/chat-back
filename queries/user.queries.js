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

    async findAllUsers(condition = {}){
        try {
            const query = await UserModel.findAll({where: condition});
            if(query){
                return {ok: true, data: query}
            }
        } catch (error) {
            return {ok: false, data: null}
        }
    }

    async find(condition){
        console.log("Condicion => ", condition)
        try {
            const query = await UserModel.findOne({where: {id: condition.id}});

            if(query.dataValues){
                return {ok: true, data: query}
            }else{
                return {ok: false, data: null}
            }
        }catch(e){
            console.log('error al ejecutar query1', e);
            return {ok: false, data: null}
        }
    }

    async putUser(condition){
        try {
            const upadateUser = await UserModel.update({last_connection: condition.last_connection}, {
                where: {id: condition.id}
            })

            return {ok: true, data: upadateUser}
        } catch (error) {
            return {ok: false, data: null}
        }
    }

    async findOne(condition){
        //console.log("Condicion => ", condition)
        try {
            const query = await UserModel.findOne({where: {name: condition.name, password: condition.password}});
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