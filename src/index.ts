import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/User';
import adminRouter from './routes/Admin';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/user',userRouter);
app.use('/admin',adminRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);  
})