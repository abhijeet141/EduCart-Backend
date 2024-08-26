import { Router, Request, Response } from "express";
import {Hash} from '../crypto'
import {User, Course} from '../database/database'
import config from '../config'
import jwt from 'jsonwebtoken'
import userValidation from "../middleware/userValidation";
import { Middleware } from "../middleware/Middleware";
const router = Router();

router.post('/signup',userValidation,async(req: Request,res: Response):Promise<void>=>{
    const {name, userEmail, password} = req.body;
    const hashedPassword = Hash(password);
    const user = new User({
        name: name,
        userEmail: userEmail,
        password: hashedPassword
    })
    await user.save();
    res.json({
        message: "User created Sucessfully"
    })
})

router.post('/signin',async(req: Request, res: Response):Promise<void> => {
    const userEmail = req.body.userEmail;
    const password = req.body.password;
    const hashedPassword = Hash(password);
    const response = await User.findOne({
        userEmail: userEmail
    })
    
    if(!response){
        res.status(403).json({
            message: "User not registered Please SignUp"
        })
        return;
    }
    if(hashedPassword!=response.password){
        res.status(403).json({
            message: "Invalid credentials. Please try again."
        });
        return;
    }
    const tokenId = jwt.sign({
        userEmail: userEmail
    },config.jwt_secret,{ expiresIn: '1h' })
        res.json({
            tokenId
        })
})

router.get('/courses',async(req: Request, res: Response)=>{
    const response = await Course.find({});
    res.json({
        courses: response
    }) 
})

router.post('/courses/:courseId',Middleware,async(req: Request,res: Response):Promise<void>=>{
    const courseId = req.params.courseId;
    const Id = await Course.findById(courseId);
    if(!Id){
        res.status(404).json({
            message:"Invalid Course Id"
        })
        return;
    }
    const userEmail = res.locals.userEmail;
    
    try{
        await User.updateOne({
            userEmail: userEmail
        },
        {
            "$push":{
                purchasedCourses: courseId
            }
        })
        res.json({
            message:"Course purchased successfully"
        })
    }
    catch(error){
        res.status(500).json({
            message: "An error occurred while purchasing the course"
        });
    }
})

router.get('/purchasedCourses',Middleware,async(req: Request, res: Response): Promise<void>=>{
    const userEmail = res.locals.userEmail;    

    const user = await User.findOne({
        userEmail: userEmail
    })

    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    const coursePurchased = user.purchasedCourses;

    const courses = await Course.findOne({
        _id:{
            "$in": coursePurchased
        }
    })
    res.json({
        message: courses
    })
})

export default router;