import jsonwebtoken from "jsonwebtoken";
import userCart from "../../Model/CartItems.js";

const Items = async (req, res) => {
  let token = req.headers.authorization;

  let tokenData = await jsonwebtoken.verify(token, process.env.secretkey);

  try {
    let userData = await userCart.find({ userId: tokenData.userId });

    res.status(200).json({ message: userData });
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Error In Finding The Cart Items Data");
  }
};

export default Items;
