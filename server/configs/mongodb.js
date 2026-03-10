
import mongoose from "mongoose";

//connect to mongodb database

const connectDB = async ()=>{
    try{
    mongoose.connection.on('connected',()=>console.log('Database connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
    } catch(error){
          console.log(error);
    }
};

export default connectDB

