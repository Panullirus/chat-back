import  express  from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from "socket.io";
import dotenv from 'dotenv';
import { Routes } from '../routes/routes.js';
import { Telegraf } from 'telegraf';
import { Database } from '../config/database.js';

dotenv.config();

class App {
    app = express.application
    http = null;
    io = null;
    bot = null;
    routes = new Routes();
    db = new Database();
    io = new Server(this.http)

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
        this.initSocket();
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
    }

    async initBotListening(bot){
        bot.on('text', async (ctx) => {
            // console.log("Error en store mensaje => ", storeMessage);
        });

        bot.on('message', (ctx) => {
            console.log('message',ctx.message);
        })

        bot.startPolling(30, 100, null, (data) => {
            console.log('startPolling => ', data);
        });

    }

    async initSocket(){
        this.io.on('connection', (socket) => {

            // socket.on('message_data', (data) => {
            //     this.io.emit('message_data', data);
            //     console.log(data)
            // })

            // socket.on('new_user_connected', data => {
            //     this.io.emit('Nuevo usuario conectado => ', data)
            // })

            // socket.on('disconnect', (data) => {
            //     console.log("usuario desconectado => ", data)
            // })
        })

        this.io.on('user_status', () => {
            
        })

        this.io.on('message_data', data => {
            this.io.emit("message_data", data)
        })

        this.io.on('update_profile', data => {
            this.io.emit("update_profile", data)
        })
        
        this.io.on("new_user_connected", (socket) => {
            console.log(socket)
        })

        this.io.on("disconnect", data => {
            console.log("Usuario desconectado => ", data)
        })

        this.io.listen(3001);

        console.log('socket io is listening on port ', 3001)
    }
}

export default new App();
export {App}