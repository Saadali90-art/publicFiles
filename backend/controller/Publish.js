import bcrypt from "bcrypt";
import { SignModel, Publish } from "../Model/model.js";
import jsonwebtoken from "jsonwebtoken";

// =========================== DATA ADDING OF THE BOOKS OF USER ==============================
const PublishOne = async (req, res, next) => {
  let { title, category, gender, description, image } = req.body;
  let data = { title, category, gender, description, image };

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
