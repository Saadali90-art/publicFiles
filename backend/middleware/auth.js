import { SignModel } from "../Model/model";
import jsonwebtoken from "jsonwebtoken";

const authentication = async (req, res, next) => {
  let data = req.body.token;

  if (data) {
    let secretkey = "54321";

    let userdata = await jsonwebtoken.verify(data, secretkey);
    console.log(userdata);
  } else {
    res.status(201).send("User Not Authorized");
  }
};

export default authentication;
