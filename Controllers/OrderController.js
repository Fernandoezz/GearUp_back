import OrderDetails from "../Models/OrderDetailsModel.js";
import verifyalert from "../Config/EmailConfiguration.js";
import Customer from "../Models/CustomerModel.js";

const Saveorder = async (req, res) => {
  const { name, addressLine1, addressLine2, city, postalCode, phone } = req.body;

  try {
    // Check if all required fields are provided
    if (!name || !addressLine1 || !city || !postalCode || !phone) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // Create new order entry
    const orderDetails = new OrderDetails({
      name,
      addressLine1,
      addressLine2,
      city,
      postalCode,
      phone,
    });

    // Save the order in the database
    await orderDetails.save();

    // Find customer by contact number (or email if you prefer)
    const findCustomer = await Customer.findOne({ phone });

    if (!findCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Send email notification to customer
    const sendEmail = await verifyalert(
      findCustomer.email, // Use customer's email from the database
      findCustomer.name,
      `Order for ${name} has been placed.`
    );

    if (sendEmail) {
      return res.status(200).json({ message: "Order placed successfully" });
    }

    return res.status(500).json({ message: "Error sending email" });
  } catch (error) {
    console.error("Error saving order:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default Saveorder;
