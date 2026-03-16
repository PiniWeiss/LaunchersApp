import mongoose from "mongoose";

async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connect to mongon db");
    } catch (error) {
        console.log("Error connecting to db", error.message);
    }
}

export default connectDb