import {request, response} from 'express'
import { messageQueries } from '../queries/message.queries.js'
import { Payload } from '../helpers/payload.js'

class MessageControllers {

    static payload = new Payload();

    async create(req, res){
        const body = req;
        const response = await messageQueries.store(body);

        if(response.ok){
            return {ok: true, message: response.data};
        }else {
            return {ok: false, message: 'Error'};
        }
    }

    async find(req, res){
        const body = req;
        const condition = body.condition;
        const response = await messageQueries.find(condition);

        if(response.ok){
            return res.status(200).json({ok: true, message: response.data});
        }else {
            return res.status(200).json({ok: false, message: "Error al ejecutar query"});
        }
    }
}

export const messageControllers = new MessageControllers();