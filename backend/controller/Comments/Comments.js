import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import Publish from "../../Model/PublishModel.js";
import Comment from "../../Model/UsersComments.js";

const comment = async (req, res) => {
  let { token, commentValue, title } = req.body;
  let data = { token, commentValue, title };

  let secretkey = process.env.secretkey;

  let tokendata = await jsonwebtoken.verify(data.token, secretkey); //=> name userid

  try {
    let usersbook = await Publish.findOne({ title: data.title });

    let Author = null;

    if (usersbook.userId === tokendata.userId) {
      Author = true;
    } else {
      Author = false;
    }

    await Comment.insertOne({
      userId: tokendata.userId,
      Author,
      name: tokendata.name,
      commentValue,
      title,
    });
    console.log("Comment Inserted To DB");

    res.status(200).json({ message: "Comment Added To DB" });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Comment Not Added To DB");
  }
};

export default comment;
