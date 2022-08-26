import { request, response } from "express";
import { messageControllers } from "./message.controllers.js";
import { UserQueries } from '../queries/user.queries.js';
import { Payload } from '../helpers/payload.js';
import { Telegraf } from 'telegraf';
import bcrypt from 'bcrypt';
const saltRounds = 10;

class UserController {

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
        bcrypt.hash(body.password, saltRounds, async function(err, hash) {
            console.log(hash)

            const input = {
                username: body.username,
                password: hash,
            }

            const query = await UserQueries.store(input);
        
            if(query.ok){
                return response.status(200).json({ok: true, message: query.data});
            }else {
                return response.status(200).json({ok: false, message: 'Error'});
            }
        });
    }

    async find(req, res){
        const body = req.body;
        const query = await UserQueries.find(body);
        if(query.ok){
            return res.status(200).json({ok: true, message: query.data});
        }else {
            return res.status(200).json({ok: false, message: 'Error'});
        }
    }

    async login(req, res){
        const body = req.body;

        const input = {
            username: body.username,
            password: body.password,
        }

        const query = await UserQueries.find(input);

        try {
            const match = await bcrypt.compare(input.password, query.data.dataValues.password);
            console.log(match)

            if(match){
                try{
                    const token = UserController.payload.createToken(query.data)
                    return res.status(200).json({ok: true, data: query.data, token: token});
                }catch(error){
                    return res.status(400).json({ok: false, data: error});
                }
            }else {
                return res.status(200).json({ok: false, data: null});
            }

        } catch (error) {
            return res.status(200).json({ok: false, message: 'Datos incorrectos'});
        }
    }

    async sendTelegramMessage(req, res){
        console.log('sendTelegramMessage', req.body);
        const body = req.body;
        const message = body.message;

        try {
            const bot = new Telegraf(process.env.BOT_TOKEN);

            const saveMessageResponse = await bot.telegram.sendMessage(5466997209, message);

            const storeMessage = await messageControllers.create(saveMessageResponse);

            console.log('storeMessage => ', storeMessage);


            return res.status(200).json({ok: true, message: 'Message sent'});
        } catch (error) {
            console.log(error)
        }
    }
}

export const userController = new UserController(); 