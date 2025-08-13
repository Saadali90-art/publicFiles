import { Publish } from "../Model/model.js";

const getDashHome = async (req, res) => {
  try {
    let data = await Publish.find({});
    res.status(200).json({});
  } catch (error) {
    console.log(error.message);
  }
};

export default getDashHome;
