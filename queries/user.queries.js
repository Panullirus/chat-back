import { UserModel } from "../models/user.model.js";
import app from '../config/config.js'

class userQueries {
    async store(user) {
        try {
            const query = await UserModel.create(user);
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: 'error al ejecutar query' }
        }
    }

    async findAllUsers(condition = {}) {
        try {
            const query = await UserModel.findAll({ where: condition });
            if (query) {
                return { ok: true, data: query }
            }
        } catch (error) {
            return { ok: false, data: null }
        }
    }

    async find(condition) {
        console.log("aca => ", condition)

        try {
            const query = await UserModel.findOne({ where: { id: condition.id } });

            if (query.dataValues) {
                return { ok: true, data: query }
            } else {
                return { ok: false, data: null }
            }
        } catch (e) {
            console.log('error al ejecutar query1', e);
            return { ok: false, data: null }
        }
    }

    async findUid(condition) {
        try {
            const query = await UserModel.findOne({ where: { uidGoogle: condition.uidGoogle } });

            if (query.dataValues) {
                return { ok: true, data: query }
            } else {
                return { ok: false, data: null }
            }
        } catch (e) {
            return { ok: false, data: null }
        }
    }

    async findEmail(condition) {

        try {
            const query = await UserModel.findOne({ where: { correo: condition.correo } });

            if (query.dataValues) {
                return { ok: true, data: query }
            } else {
                return { ok: false, data: null }
            }
        } catch (e) {
            console.log('error al ejecutar query1', e);
            return { ok: false, data: null }
        }
    }

    async findEmail(condition) {
        try {
            const query = await UserModel.findOne({ where: { correo: condition.correo } });

            if (query.dataValues) {
                return { ok: true, data: query }
            } else {
                return { ok: false, data: null }
            }
        } catch (e) {
            console.log('error al ejecutar query1', e);
            return { ok: false, data: null }
        }
    }

    async putUserConnection(condition) {
        try {
            const upadateUser = await UserModel.update({ last_connection: condition.last_connection }, {
                where: { id: condition.id }
            })

            app.io.emit('user_status', upadateUser)

            return { ok: true, data: upadateUser }
        } catch (error) {
            return { ok: false, data: null }
        }
    }

    async putUserProfile(condition) {

        try {
            const upadateUser = await UserModel.update({ correo: condition.email, nombre: condition.name }, {
                where: { id: condition.id }
            })

            app.io.emit('update_profile', condition)

            return { ok: true, data: upadateUser }
        } catch (error) {
            return { ok: false, data: null }
        }
    }

    async putPasswordProfile(condition) {


        try {
            const upadateUser = await UserModel.update({ clave: condition.clave }, {
                where: { id: condition.id }
            })

            return { ok: true, data: upadateUser }
        } catch (error) {
            return { ok: false, data: null }
        }
    }

    async findOne(condition) {
        try {
            const query = await UserModel.findOne({ where: { name: condition.name, password: condition.password } });
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            return { ok: false, data: null }
        }
    }
}

export const UserQueries = new userQueries();