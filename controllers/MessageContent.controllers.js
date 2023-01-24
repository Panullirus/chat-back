import { request, response } from 'express';
import { messageContentQueries } from '../queries/Message.queries.js'
import { Payload } from '../helpers/payload.js';
import app from '../config/config.js'

class MessageContentControllers {
    static payload = new Payload();

    async sayHello(request, response) {
        return response.status(200).json({
            ok: true,
            message: 'Hello'
        });
    }

    async processData(request, response) {
        const body = request.body;
        console.log('data from', body)
        return response.status(200).json({ ok: true, message: 'datos recividos' });
    }

    async create(req, response) {
        const body = req.body;
        const query = await messageContentQueries.store(body);

        app.io.emit('message_data', query.data.dataValues);

        if (query.ok) {
            return response.status(200).json({ ok: true, message: query.data });
        } else {
            return response.status(200).json({ ok: false, message: 'Error' });
        }
    }

    async find(req, res) {
        const body = req.body
        console.log("ChatRoom => ", body)
        const query = await messageContentQueries.find(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, message: query.data });
        } else {
            return res.status(200).json({ ok: false, message: 'Error' });
        }
    }

    async findOne(req, res) {
        const body = req.body;

        console.log(body)
        const query = await messageContentQueries.findOne(body);
        if (query) {
            return res.status(200).json({ ok: true, message: query.data });
        } else {
            return res.status(200).json({ ok: false, message: 'Error' });
        }
    }

    async update(req, res) {
        const body = req.body;
        const query = await messageContentQueries.update(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, message: query.data });
        } else {
            return res.status(200).json({ ok: false, message: 'Error' });
        }
    }

    async delete(req, res) {
        const body = req.body;
        const query = await messageContentQueries.delete(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, message: query.data });
        } else {
            return res.status(200).json({ ok: false, message: 'Error' });
        }
    }
}

export const messageContent = new MessageContentControllers();