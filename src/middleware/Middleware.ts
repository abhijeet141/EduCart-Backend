import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config'
import { Request, Response, NextFunction } from 'express';

export function Middleware(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization;
    if(!token || !token.startsWith('Bearer ')){
        return res.status(403).json({})
    }
    const tokenId = token?.split(" ")[1] as string;
    try{
        const response = jwt.verify(tokenId,config.jwt_secret);
        const payload = response as JwtPayload;
        if (payload.userEmail) {
            res.locals.userEmail = payload.userEmail;
        }
        next();
    }
    catch(error){
        res.status(403).json({
            error
        })
    }
}