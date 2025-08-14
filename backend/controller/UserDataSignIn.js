import bcrypt from "bcrypt";
import SignModel from "../Model/SignInModel.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

// ======================== GETTING THE USER DATA FOR THE HOME PAGE SIGN UP =======================

const getSignIn = async (req, res) => {
  let tokenfront = req.headers.authorization;

  dotenv.config();
  let secretkey = process.env.secretkey;

  let tokendata = await jsonwebtoken.verify(tokenfront, secretkey);

  try {
    let result = await SignModel.findOne({
      name: tokendata.name,
      userId: tokendata.userId,
    });

    res.status(200).json({ message: result });
  } catch (error) {
    console.log("Can not Find User Sign In", error.message);
    res.status(400).json({ message: "User Not Found" });
  }
};

export default getSignIn;
