import mongoose from "mongoose";

const OrderDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String }, // Optional field
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

const OrderDetails = mongoose.model("OrderDetails", OrderDetailsSchema);
export default OrderDetails;
