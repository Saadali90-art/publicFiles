import bcrypt from "bcrypt";
import Publish from "../Model/PublishModel.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

// =========================== DATA ADDING OF THE BOOKS OF USER ==============================
const PublishOne = async (req, res) => {
  let { title, category, gender, description, image } = req.body;
  let token = req.headers.tokenuser;

  dotenv.config();
  let secretkey = process.env.secretkey;

  let tokeninfo = await jsonwebtoken.verify(token, secretkey);

  let data = {
    userId: tokeninfo.userId,
    title,
    category,
    gender,
    description,
    image,
  };

  if (
    title === "" ||
    category === "" ||
    gender === "" ||
    description === "" ||
    image === ""
  ) {
    return res.status(400).json({ message: "Data Not Present" });
  }

  try {
    await Publish.insertOne(data);
    console.log("Data Added To DB");
    res.status(200).send("Data Sended To DB");
  } catch (error) {
    console.log("Error While Sending data", error.message);
  }
};

export default PublishOne;
