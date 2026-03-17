import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"

import launcherRoute from "./routes/launcher.route.js"
import authRoute from "./routes/auth.route.js"
import connectDb from "./db/dbConnection.js";


const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());

app.use(cors({origin: "http://localhost:5173", credentials:true}));
app.use(cookieParser())
app.use("/api/launchers", launcherRoute)
app.use("/api/auth", authRoute)

app.listen(PORT, () => {
  connectDb();
  console.log(`Your server running on port: ${PORT}..`);
});
