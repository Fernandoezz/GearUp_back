import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true }
}, { timestamps: true }); // ✅ Adds createdAt & updatedAt fields automatically

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
