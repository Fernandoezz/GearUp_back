import express from "express";
import Saveorder from "../Controllers/OrderController.js";

const router = express.Router();

router.post("/saveorders", Saveorder);

export default router;
