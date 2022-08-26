import express from "express";
import { userController } from '../controllers/user.controllers.js'
import { tecnologiesController } from "../controllers/tecnologies.controllers.js";
import { messageControllers } from "../controllers/message.controllers.js";
import { profileController } from "../controllers/profile.controllers.js";
import { languajesController } from "../controllers/languajes.controllers.js";
import { schoolarController } from "../controllers/schoolar.controllers.js";
import { languajesProgrammingController } from "../controllers/languajesProgramming.controllers.js";
import { experienceController } from "../controllers/experience.controllers.js";
import { competenciesController } from "../controllers/competencies.controllers.js";
import { validateToken } from "../middlewares/accessToken.middleware.js";
import { Server } from "socket.io";

export class Routes {
    initRoutes(app = express.application) {

        app.route('/api/telegram').post(userController.sendTelegramMessage);

        app.route('/api/telegram/save').post(messageControllers.create);

        app.get('/api/telegram/messages', messageControllers.find);

        app.post('/data', userController.processData);

        app.post('/test', userController.sayHello);

        app.post('/user_create', userController.create);

        app.get('/user_find', userController.find);

        app.get('/find_user', userController.find).post([validateToken.validateJWT], userController.find);

        app.post('/login', userController.login);

        //Tecnologies Methods
        app.post('/tecnologies_create', tecnologiesController.create).post([validateToken.validateJWT], userController.find);;
        app.get('/tecnologies_find', tecnologiesController.find).post([validateToken.validateJWT], userController.find);;
        app.get('/tecnologies_find_one', tecnologiesController.findOne).post([validateToken.validateJWT], userController.find);;
        app.put('/tecnologies_update', tecnologiesController.update).post([validateToken.validateJWT], userController.find);;
        app.post('/tecnologies_delete', tecnologiesController.delete).post([validateToken.validateJWT], userController.find);;

        //Profile Methods
        app.post('/profile_create', profileController.create).post([validateToken.validateJWT], userController.find);;
        app.get('/profile_find', profileController.find).post([validateToken.validateJWT], userController.find);;
        app.get('/profile_find_one', profileController.findOne).post([validateToken.validateJWT], userController.find);;
        app.put('/profile_update', profileController.update).post([validateToken.validateJWT], userController.find);;
        app.delete('/profile_delete', profileController.delete).post([validateToken.validateJWT], userController.find);;

        //Languajes Methods
        app.post('/languajes_create', languajesController.create).post([validateToken.validateJWT], userController.find);;
        app.get('/languajes_find', languajesController.find).post([validateToken.validateJWT], userController.find);;
        app.get('/languajes_find_one', languajesController.findOne).post([validateToken.validateJWT], userController.find);;
        app.put('/languajes_update', languajesController.update).post([validateToken.validateJWT], userController.find);;
        app.post('/languajes_delete', languajesController.delete).post([validateToken.validateJWT], userController.find);;

        //Schoolar Methods
        app.post('/schoolar_create', schoolarController.create).post([validateToken.validateJWT], userController.find);;
        app.get('/schoolar_find', schoolarController.find).post([validateToken.validateJWT], userController.find);;
        app.get('/schoolar_find_one', schoolarController.findOne).post([validateToken.validateJWT], userController.find);;
        app.put('/schoolar_update', schoolarController.update).post([validateToken.validateJWT], userController.find);;
        app.post('/schoolar_delete', schoolarController.delete).post([validateToken.validateJWT], userController.find);;

        //LanguajesProgramming Methods
        app.post('/languajesProgramming_create', languajesProgrammingController.create).post([validateToken.validateJWT], userController.find);;
        app.get('/languajesProgramming_find', languajesProgrammingController.find).post([validateToken.validateJWT], userController.find);;
        app.get('/languajesProgramming_find_one', languajesProgrammingController.findOne).post([validateToken.validateJWT], userController.find);;
        app.put('/languajesProgramming_update', languajesProgrammingController.update).post([validateToken.validateJWT], userController.find);;
        app.post('/languajesProgramming_delete', languajesProgrammingController.delete).post([validateToken.validateJWT], userController.find);;

        //Experience Methods
        app.post('/experience_create', experienceController.create).post([validateToken.validateJWT], userController.find);;
        app.get('/experience_find', experienceController.find).post([validateToken.validateJWT], userController.find);;
        app.get('/experience_find_one', experienceController.findOne).post([validateToken.validateJWT], userController.find);;
        app.put('/experience_update', experienceController.update).post([validateToken.validateJWT], userController.find);;
        app.post('/experience_delete', experienceController.delete).post([validateToken.validateJWT], userController.find);;

        //Competencies Methods
        app.post('/competencies_create', competenciesController.create).post([validateToken.validateJWT], userController.find);;
        app.get('/competencies_find', competenciesController.find).post([validateToken.validateJWT], userController.find);;
        app.get('/competencies_find_one', competenciesController.findOne).post([validateToken.validateJWT], userController.find);;
        app.put('/competencies_update', competenciesController.update).post([validateToken.validateJWT], userController.find);;
        app.post('/competencies_delete', competenciesController.delete).post([validateToken.validateJWT], userController.find);;
    }
}