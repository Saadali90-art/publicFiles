import bcrypt from "bcrypt";
import { SignModel } from "../Model/model.js";
import jsonwebtoken from "jsonwebtoken";

// ==============VERIFYING DATA IF THEY ARE PREVIOUS PRESENT ===================
const verify = async (data) => {
  let result = await SignModel.find({
    $or: [{ name: data.name }, { email: data.email }],
  });

  if (result.length <= 0) {
    return true;
  } else {
    return false;
  }
};

// ================== GETTING DATA FROM SIGN UP PAGE =====================

const sendData = async (req, res) => {
  let { name, email, phone } = req.body;

  // ======= SALTING THE PASSWORD
  const genSalt = await bcrypt.genSalt();
  let password = await bcrypt.hash(req.body.password, genSalt);

  // ============= JWS TOKEN

  let data = { name, email, password, phone };

  if (await verify(data)) {
    try {
      let result = await SignModel.insertOne(data);
      console.log("Data Sended TO DB");

      let secretkey = "54321";
      let token = await jsonwebtoken.sign(result._id.toString(), secretkey);

      res.status(200).json({ message: "Data Sended TO DB", token: token });
    } catch (error) {
      console.log("Error While Sending Data To DB", error.message);
    }
  } else {
    console.log("Data Already Present");
    res.status(400).json({
      message: "Data Already Present",
    });
  }
};

export default sendData;
