import Customer from "../Models/CustomerModel.js";
import generatekey from "../Config/TokenGenerate.js";

const addUser = async (req, res) => {
  const { name, email, phone } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // ✅ Check if user already exists
    const existingUser = await Customer.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // ✅ Create new user
    const user = await Customer.create({ name, email, phone });

    // ✅ Generate authentication token
    const token = generatekey({ email: user.email });

    return res.status(201).json({ message: "User added successfully", token });
  } catch (error) {
    console.error("❌ Error adding user:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export default addUser;
