import mongoose, {Schema} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL!; //non null assertion operator

mongoose.connect(MONGO_URL);

interface IAdmin{
    name: string,
    adminEmail: string,
    password: string
}

interface IUser{
    name: string,
    userEmail: string,
    password: string,
    purchasedCourses: mongoose.Types.ObjectId[]
}

interface ICourse {
    title: string,
    description: string,
    price: number,
    imageLink: string
}

const AdminSchema = new Schema<IAdmin>({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    adminEmail:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        maxlength: 30
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    }
})

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    userEmail:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        maxlength: 30
    },
    password:{
        type: String,
        required: true,
        minlength: 3
    },
    purchasedCourses:[{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const courseSchema = new Schema<ICourse>({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    description:{
        type: String,
        required: true,
        minlength: 5,
        maxLength: 100
    },
    price:{
        type: Number,
        required: true,
    },
    imageLink:{
        type: String
    }
})

const Admin = mongoose.model<IAdmin>('Admin', AdminSchema);
const User = mongoose.model<IUser>('User', UserSchema);
const Course = mongoose.model<ICourse>('Course',courseSchema);

export{Admin,User,Course};