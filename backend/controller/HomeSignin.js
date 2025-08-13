import bcrypt from "bcrypt";
import { SignModel, Publish } from "../Model/model.js";
import jsonwebtoken from "jsonwebtoken";

// ======================== GETTING THE DATA FOR THE HOME PAGE SIGN UP =======================

const getSignIn = async (req, res) => {
  let tokenfront = req.headers.authorization;

  let secretkey = "54321";

  let tokendata = await jsonwebtoken.verify(tokenfront, secretkey);

  try {
    let result = await SignModel.findOne({ _id: tokendata });
    res.status(200).json(result);
  } catch (error) {
    console.log("Can not Find User Sign In", error.messsage);
    res.status(400).json({ message: "User Not Found" });
  }
};

export default getSignIn;
