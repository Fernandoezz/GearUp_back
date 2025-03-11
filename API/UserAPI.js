import express from "express";
import  addUser  from "../Controllers/UserController.js";

const router = express.Router();

router.post("/adducers",addUser);

export default router;