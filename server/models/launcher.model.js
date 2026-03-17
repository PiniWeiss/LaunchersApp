import mongoose from "mongoose";

const launcherSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
        
    },
    city: {
        type: String,
        required: true, 
    },
    rocketType:{
        type:String,
        required: true,
        enum: ["Shahab3", "Fetah110", "Radwan", "Kheiba"],
    },
    latitude:{
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
        
    },
    destroyed:{
        type: Boolean,
        required: false
    }
}, {timestamps: true});


const Launcher = mongoose.model("Launcher", launcherSchema);

export default Launcher