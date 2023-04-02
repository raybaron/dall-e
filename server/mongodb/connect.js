import mongoose from "mongoose";

const connectDB = (url)=>{
    mongoose.set('strictQuery',true);

    mongoose.connect(url)
    .then(()=> console.log('mongo db connected'))
    .catch((error)=>console.log('error name:',error));
}

export default connectDB;