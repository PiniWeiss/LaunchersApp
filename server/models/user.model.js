import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
        enum: ["admin", "airSoldier", "intelligenceSoldier"],
    },
    password: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
    }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User