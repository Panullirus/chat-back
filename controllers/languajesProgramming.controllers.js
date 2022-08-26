import {request, response} from 'express';
import {languajesProgrammingQueries} from '../queries/languajesProgramming.queries.js';
import {Payload} from '../helpers/payload.js';

class LanguajesProgrammingController {
    static payload = new Payload();

    async sayHello (request, response) {
        return response.status(200).json({
            ok: true,
            message: 'Hello'
        });
    }

    async processData(request, response){
        const body = request.body;
        console.log('data from', body)
        return response.status(200).json({ok: true, message: 'datos recividos'});
    }

    async create(req, response){
        const body = req.body;
        const query = await languajesProgrammingQueries.store(body);
        if(query.ok){
            return response.status(200).json({ok: true, message: query.data});
        }else {
            return response.status(200).json({ok: false, message: 'Error'});
        }
    }

    async find(req, res){
        const body = req.body;
        const condition = body.condition;
        const query = await languajesProgrammingQueries.find(condition);
        if(query.ok){
            return res.status(200).json({ok: true, message: query.data});
        }else {
            return res.status(200).json({ok: false, message: 'Error'});
        }
    }

    async findOne(req, res){
        const body = req.body;
        const query = await languajesProgrammingQueries.findOne(body);
        if(query.ok){
            return res.status(200).json({ok: true, message: query.data});
        }else {
            return res.status(200).json({ok: false, message: 'Error'});
        }
    }

    async update(req, res){
        const body = req.body;
        const query = await languajesProgrammingQueries.update(body);
        if(query.ok){
            return res.status(200).json({ok: true, message: query.data});
        }else {
            return res.status(200).json({ok: false, message: 'Error'});
        }
    }

    async delete(req, res){
        const body = req.body;
        const query = await languajesProgrammingQueries.delete(body);
        if(query.ok){
            return res.status(200).json({ok: true, message: query.data});
        }else {
            return res.status(200).json({ok: false, message: 'Error'});
        }
    }
}

export const languajesProgrammingController = new LanguajesProgrammingController();