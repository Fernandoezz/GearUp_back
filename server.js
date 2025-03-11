import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import connectDB from "./Config/DBConnection.js";
import UserAPI from "./API/UserAPI.js";
import CarAPI from "./API/CartAPI.js";
import OrderAPI from "./API/OrderAPI.js";

const app = express();
dotenv.config();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// db connection 
connectDB();


// API
app.use("/api/user",UserAPI);
app.use("/api/car",CarAPI);
app.use("/api/order",OrderAPI);



const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
