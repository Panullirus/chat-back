import { request } from "express";
import fs from 'fs';

export class validateToken {
    static validateJWT(req, res, next) {
        const token = req.get('Authorization');
        let public_key = null;

        if(process.env.NODE != 'dev'){
            public_key = fs.readFileSync(process.env.PUBLIC_KEY, 'utf8');
        } else {
            public_key = fs.readFileSync('.keys/public.pem', 'utf8');
        }

        try{
            let decoded = jwt.verify(token, public_key);

            console.log("decoded => ", decoded);

        }catch(error){
            return res.status(403).json({ok: false, errors: 'Existe el siguiente problema con la cabecera de autorización: ' + error});
        }
    }

    static middlewareRunning(req, res, next) {
        console.log(req.body)
        console.log('middlewareRunning');
        next();
    }
}