import Publish from "../Model/PublishModel.js";

const newArrivals = async (req, res) => {
  try {
    let data = await Publish.find({}).limit(6);
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
  }
};

export default newArrivals;
