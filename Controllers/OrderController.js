import OrderDetails from "../Models/OrderDetailsModel.js";
import verifyalert from "../Config/EmailConfiguration.js";
import Customer from "../Models/CustomerModel.js";

const Saveorder = async (req, res) => {
  const { customerEmail, cart_topic, date, selleremail } = req.body;

  try {
    if (!customerEmail || !cart_topic || !date || !selleremail) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const orderdetails = new OrderDetails({
      customerEmail,
      cart_topic,
      date,
      selleremail,
    });

    // Save the order and wait for completion
    await orderdetails.save();

  
    const findCustomer = await Customer.findOne({ email: customerEmail });

    if (!findCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

   
    const sendEmail = await verifyalert(
      selleremail,
      findCustomer.name,
      cart_topic
    );

    if (sendEmail) {
      return res.status(200).json({ message: "Ordered successfully" });
    }

    return res.status(500).json({ message: "Error sending email" });
  } catch (error) {
    console.error("Error saving order:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default Saveorder;
