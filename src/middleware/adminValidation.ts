import {z} from 'zod'
import { Admin } from '../database/database'
import { Request, Response, NextFunction } from 'express'

const schema = z.object({
    name: z.string(),
    adminEmail: z.string().email({message:"Invalid Email fromat"}),
    password: z.string().min(8).max(32)
})

export type zodType = z.infer<typeof schema>

async function adminValidation(req: Request,res: Response,next: NextFunction):Promise<void>{
    const adminDetail = req.body;
    const response = schema.safeParse(adminDetail);
    if(!response.success){
        res.status(400).json({
            message: "Input is invalid"
        })
        return;
    }
    const existingUser = await Admin.findOne({
        adminEmail: adminDetail.adminEmail
    })
    if(existingUser){
        res.status(409).json({
            message: "Admin already exists"
        })
    }
    else{
        next();
    }
}

export default adminValidation;