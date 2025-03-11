import Customer from "../Models/CustomerModel.js";
import generatekey from "../Config/TokenGenerate.js";

const addUser = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const older = await Customer.findOne({ email });

    if (older) {
      return res.status(401).json({ message: "User already exists" });
    }

    const user = await Customer.create({
      name,
      email,
      phone,
    });
    await user.save();

    const generatekeytoken = generatekey({ email: user.email });

    return res.status(200).json({ message: "User added successfully", token: generatekeytoken });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default addUser;
