import express from "express";
import addUser from "../Controllers/UserController.js"; // Ensure correct path

const router = express.Router();

// ✅ Matches frontend request
router.post("/addusers", addUser);

// Default Route for Invalid User API Requests
router.all("*", (req, res) => {
  res.status(404).json({ message: "User API route not found" });
});

export default router;
