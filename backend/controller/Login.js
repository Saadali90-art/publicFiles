import bcrypt from "bcrypt";
import { SignModel, Publish } from "../Model/model.js";
import jsonwebtoken from "jsonwebtoken";

// ====================== LOG IN SECTION =====================

// ================ SEPARATE VERIFY FPR THE LOG IN =================

const verifyLogin = async (data) => {
  let result = await SignModel.findOne({ email: data.email });

  if (result !== null) {
    let compare = await bcrypt.compare(data.password, result.password);

    if (compare) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// ==================== LOGIN ==================

const Login = async (req, res) => {
  let { email, password } = req.body;
  let data = { email, password };

  try {
    if (await verifyLogin(data)) {
      let result = await SignModel.findOne({ email: data.email });

      let userinfo = { name: result.name, email: result.email };

      let secretkey = "54321";
      let token = await jsonwebtoken.sign(userinfo, secretkey);

      res.status(200).json({ message: "Done", token: token });
    } else {
      res.status(400).json({ message: "Invalid Credientials" });
    }
  } catch (error) {
    console.log("Error In The Login Function", error.messsage);
  }
};

export default Login;
