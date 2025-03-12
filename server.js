import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./Config/DBConnection.js";
import UserAPI from "./API/UserAPI.js";
import CarAPI from "./API/CartAPI.js";
import OrderAPI from "./API/OrderAPI.js";

const app = express();
dotenv.config();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Database Connection
connectDB().then(() => console.log("✅ Database Connected Successfully")).catch(err => console.error("❌ Database Connection Error:", err));

// API Routes
app.use("/api/user", UserAPI);
app.use("/api/car", CarAPI);
app.use("/api/order", OrderAPI);

// Default Route for Health Check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running..." });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
