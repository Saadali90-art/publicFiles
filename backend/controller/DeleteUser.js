import bcrypt from "bcrypt";
import { SignModel, Publish } from "../Model/model.js";
import jsonwebtoken from "jsonwebtoken";

// ========================= DELETING THE USER DATA ================================

const deleteUser = async (req, res) => {
  let data = req.headers.token;

  try {
    let secretkey = "54321";
    let tokendata = await jsonwebtoken.verify(data, secretkey);

    await SignModel.deleteOne({ _id: tokendata });
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    console.log("Error While Deleting The User Data", error.message);
    res.status(400).json({ message: "User Not Deleted" });
  }
};

export default deleteUser;
