import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
});

const Publisher = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  gender: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Publish = mongoose.model("publishes", Publisher);

const SignModel = mongoose.model("Sign_In", userSchema);

export { Publish, SignModel };
