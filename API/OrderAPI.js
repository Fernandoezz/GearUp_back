import express from "express";
import Saveorder from "../Controllers/OrderController.js";

const router = express.Router();

router.post("/saveorder", Saveorder);

export default router;
