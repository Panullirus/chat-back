import express from "express";
import { userController } from '../controllers/user.controllers.js'
import { messageRoom } from "../controllers/MessageRoom.controller.js";
import { validateToken } from "../middlewares/accessToken.middleware.js";
import { messageContent } from "../controllers/MessageContent.controllers.js"
import nodemailer from "nodemailer";

export class Routes {
    initRoutes(app_ex = express.application) {

        app_ex.route('/api/telegram').post(userController.sendTelegramMessage);

        app_ex.post('/data', userController.processData);

        app_ex.post('/test', userController.sayHello);

        app_ex.post('/user_create', userController.create);

        app_ex.post('/update_user', userController.updateProfile)

        app_ex.post('/user_find', userController.find);

        app_ex.post('/user_email_find', userController.findByEmail)

        app_ex.post('/user_uid_find', userController.findByUid)

        app_ex.put('/put_last_connection', userController.updateConnection)

        app_ex.get('/find_user', userController.find).post([validateToken.validateJWT], userController.find);

        app_ex.post('/login', userController.login);

        app_ex.get('/get_users', userController.findAllUsers)

        app_ex.post('/create_message_room', messageRoom.create)

        app_ex.post('/find_message_room', messageRoom.findOne)

        app_ex.post('/get_all_message', messageContent.find)

        app_ex.post('/send_message', messageContent.create)

        app_ex.post('/user_connected', userController.updateConnection)

        app_ex.post('/change_password', userController.password)

    }
}