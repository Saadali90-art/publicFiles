import Comment from "../Model/UsersComments.js";

const getComments = async (req, res) => {
  let title = req.body;
  // console.log(title);

  try {
    let result = await Comment.find({ title: title.title });
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
  }
};

export default getComments;
