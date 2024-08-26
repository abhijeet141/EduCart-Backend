import {z} from 'zod'
import { User } from '../database/database'
import { Request, Response, NextFunction } from 'express'

const schema = z.object({
    name: z.string(),
    userEmail: z.string().email(),
    password: z.string().min(8).max(32)
})

async function userValidation(req: Request,res: Response,next: NextFunction):Promise<void>{
    const userDetail = req.body;
    const response = schema.safeParse(userDetail);
    if(!response.success){
        res.status(400).json({
            message: "Input is invalid"
        })
        return;
    }
    const existingUser = await User.findOne({
        userEmail: userDetail.userEmail
    })
    if(existingUser){
        res.status(409).json({
            message: "User already exists"
        })
    }
    else{
        next();
    }
}

export default userValidation;