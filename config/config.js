import  express  from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from "socket.io";
import dotenv from 'dotenv';
import { Routes } from '../routes/routes.js';
import { Telegraf } from 'telegraf';
import { Database } from '../config/database.js';
import { messageControllers } from "../controllers/message.controllers.js";

dotenv.config();

class App {
    app = express.application
    http = null;
    bot = null;
    routes = new Routes();
    db = new Database();

    constructor(){
        this.initializeApp()
    }

    async initializeApp() {
        this.app = express();
        this.config();
        this.http = http.createServer(this.app);
        await this.initDatabase();
        this.routes.initRoutes(this.app);
        this.bot = new Telegraf(process.env.BOT_TOKEN);
        await this.initBotListening(this.bot);
    }

    config(){
        this.app.use(
            express.urlencoded({
                extended: true
            })
        )
        this.app.use(express.json())
        this.app.use(cors({origin: '*'}))
    }

    async initDatabase(){
        const conection = await this.db.conection();
        console.log(conection.message);
    }

    async initBotListening(bot){
        bot.on('text', async (ctx) => {

            console.log("Contenido del mensaje => ", ctx.message);

            const storeMessage = await messageControllers.create(ctx.message);
            console.log("Desde initBotListening => ", storeMessage);

            // console.log("Error en store mensaje => ", storeMessage);
        });

        bot.on('message', (ctx) => {
            console.log('message',ctx.message);
        })

        bot.startPolling(30, 100, null, (data) => {
            console.log('startPolling => ', data);
        });

    }
}

export default new App();