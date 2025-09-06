import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import Publish from "../../Model/PublishModel.js";
import Comment from "../../Model/UsersComments.js";
import SignModel from "../../Model/SignInModel.js";
import crypto from "crypto";

const comment = async (req, res) => {
  let { token, commentValue, title } = req.body;
  let data = { token, commentValue, title };

  let tokendata = await jsonwebtoken.verify(data.token, process.env.secretkey);

  let commentId = crypto
    .createHash("sha256")
    .update(JSON.stringify(data) + Date.now().toString())
    .digest("hex")
    .slice(0, 13);

  try {
    let userData = await SignModel.findOne({
      userId: tokendata.userId,
      name: tokendata.name,
    });

    let usersbook = await Publish.findOne({ title: data.title });

    let Author = null;

    if (usersbook.userId === tokendata.userId) {
      Author = true;
    } else {
      Author = false;
    }

    let commentData = {
      userId: tokendata.userId,
      commentId,
      Author,
      name: tokendata.name,
      commentValue,
      title,
      profileImage: userData.profileImage,
    };

    await Comment.insertOne(commentData);
    console.log("Comment Inserted To DB");

    res.status(200).json({ message: "Comment Added To DB" });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Comment Not Added To DB");
  }
};

export default comment;
