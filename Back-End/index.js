import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoutes from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOptions={
    origin:true,
    Credential:true,
};
//for testing 
app.get("/",(req,res)=>{
    res.send("api is working");
});
//dataconnection
mongoose.set('strictQuery',false);
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONG_URL)
           console.log("Databased connected");
    }catch(err){
        console.error("Databased connection failed",err);
    }
}



//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/booking', bookingRoute)


app.listen(port,()=>{
    connect();
    console.log('server listening on port', port);
} )