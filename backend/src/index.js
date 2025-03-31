import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import authRoutes from "../src/routes/auth.route.js";
import mesaageRoutes from "../src/routes/message.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("api/message",mesaageRoutes);


app.listen(PORT, () => {
    console.log(`App listening at port:${PORT}`);
    connectDB();
})