import { Router, Request, Response } from "express";
import {Admin, Course} from "../database/database"; 
import adminValidation from "../middleware/adminValidation";
import {Middleware} from "../middleware/Middleware"
import {Hash} from '../crypto';
import jwt from 'jsonwebtoken';
import config from '../config'

const router = Router();


router.post('/signup',adminValidation,async(req: Request, res: Response):Promise<void>=>{
    const {name, adminEmail, password} = req.body;
    const hashedPassword = Hash(password);
    const adminUser = new Admin({
        name: name,
        adminEmail: adminEmail,
        password: hashedPassword
    })
    await adminUser.save();
    res.json({
        messgage: "Admin created sucessfully"
    })
})

router.post('/signin',async(req: Request,res: Response):Promise<void>=>{
    const adminEmail = req.body.adminEmail;
    const password = req.body.password;
    const hashedPassword = Hash(password);
    const response = await Admin.findOne({
        adminEmail: adminEmail
    })
    if(!response){
        res.status(403).json({
            message: "User not registered Please SignUp"
        })
        return;
    }
    if(hashedPassword!=response?.password){
        res.status(403).json({
            message: "Invalid credentials. Please try again."
        });
        return;
    }
    
    const tokenId = jwt.sign({
        adminEmail: adminEmail
    },config.jwt_secret,{ expiresIn: '1h' })
        res.json({
            tokenId
        })
    }
)

router.post('/courses',Middleware,async(req: Request,res: Response):Promise<void>=>{
    const {title, description, price, imageLink} = req.body;
    const course = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })
    await course.save();
    res.json({message: "Course created sucessfully by Admin",
        courseId: course._id
    })
})

router.get('/courses',async(req: Request, res: Response):Promise<void>=>{
    const response = await Course.find({})
    res.json({
        courses: response
    })
})



export default router;