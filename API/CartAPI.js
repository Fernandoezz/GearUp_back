import express from "express";
import { getcardetails, Addcardetails,getAllCarDetails } from "../Controllers/CartController.js";

const router = express.Router();

router.post("/addcardetails", Addcardetails);
router.get("/getcardetails", getcardetails);
router.get("/getallcardetails", getAllCarDetails);

export default router;
