import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
});

const SignModel = mongoose.model("Sign_In", userSchema);

export default SignModel;
