import mongoose from "mongoose";

const userComments = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  Author: { type: Boolean, required: true },
  commentValue: { type: String, required: true },
  title: { type: String, required: true },
});

const Comment = mongoose.model("Usercomments", userComments);

export default Comment;
