import CartDetails from "../Models/CartDetailsModel.js";

const Addcardetails = (req, res) => {
  const { topic, description, price, category, ownerEmail } = req.body;

  try {
    if (!topic || !description || !price || !category || !ownerEmail) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const preaddedcar = CartDetails.findOne({ topic });

    if (preaddedcar) {
      return res.status(401).json({ message: "Car already exists" });
    }

    const cardetails = new CartDetails({
      topic,
      description,
      ownerEmail,
      price,
      category,
    });

    cartdetails.save();
    return res.status(200).json({ message: "Car details added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getcardetails = async (req, res) => {
  const { topic } = req.body;
  try {
    if (topic == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const cardetails = await CartDetails.findOne({ topic: topic });

    return res
      .status(200)
      .json({ message: "Car details fetched successfully", cardetails });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllCarDetails = async (req, res) => {
    try {
        const carDetails = await CartDetails.find({});
        return res.status(200).json({ message: "Car details fetched successfully", carDetails });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


export { getcardetails, Addcardetails ,getAllCarDetails };
