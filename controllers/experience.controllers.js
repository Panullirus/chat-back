import {request, response} from 'express';
import { experienceQueries } from '../queries/experience.queries.js';
import { Payload } from '../helpers/payload.js';

class ExperienceController {
    static payload = new Payload();

    async processData(request, response){
        const body = request.body;
        console.log('data from', body)
        return response.status(200).json({ok: true, message: 'datos recividos'});
    }

    async create(req, response){
        const body = req.body;
        const query = await experienceQueries.store(body);
        if(query.ok){
            return response.status(200).json({ok: true, message: query.data});
        }else {
            return response.status(200).json({ok: false, message: 'Error'});
        }
    }

    async find(req, res){
        const body = req.body;
        const condition = body.condition;
        const query = await experienceQueries.find(condition);
        if(query.ok){
            return res.status(200).json({ok: true, message: query.data});
        }else {
            return res.status(200).json({ok: false, message: 'Error'});
        }
    }

    async findOne(req, res){
        try {
            const body = req.body;
            const query = await experienceQueries.findOne(body);
            if(query.ok){
                return res.status(200).json({ok: true, message: query.data});
            }else {
                return res.status(200).json({ok: false, message: 'Error'});
            }
        } catch (error) {
            console.log(error)
        }
    }

    async update(req, res){
        const body = req.body;

        const query = await experienceQueries.update(body);
        console.log(query)
        if(query.ok){
            return res.status(200).json({ok: true, message: query.data});
        }else {
            return res.status(200).json({ok: false, message: 'Error'});
        }
    }

    async delete(req, res){
        const body = req.body;
        const query = await experienceQueries.delete(body);
        if(query.ok){
            return res.status(200).json({ok: true, message: query.data});
        }else {
            return res.status(200).json({ok: false, message: 'Error'});
        }
    }
}

export const experienceController = new ExperienceController();