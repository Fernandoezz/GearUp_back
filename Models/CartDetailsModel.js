import mongoose from "mongoose";

const cardenas = new mongoose.Schema(
  {
    topic: { type: String, required: true, unique: true },
    ownerEmail: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    available: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const CarDetails = mongoose.model("CarDetails", cardenas);
export default CarDetails;
