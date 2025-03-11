import mongoose from "mongoose";

const OrderDetailsSchema = new mongoose.Schema(
  {
    customerEmail: { type: String, required: true },
    cart_topic: { type: String, required: true },
    date: { type: String, required: true },
    selleremail: { type: String, required: true },
  },
  { timestamps: true }
);

const OrderDetails = mongoose.model("OrderDetails", OrderDetailsSchema);
export default OrderDetails;
