import express from "express";
import dotenv from "dotenv";
import cors from "cors";
 
import launcherRoute from "./routes/launcher.route.js"
import connectDb from "./db/dbConnection.js";


const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());

app.use(cors());

app.use("/api/launcher", launcherRoute)

app.listen(PORT, () => {
  connectDb();
  console.log(`Your server running on port: ${PORT}..`);
});
