import Publish from "../../Model/PublishModel.js";

const discoveritems = async (req, res) => {
  try {
    let data = await Publish.find({}).sort({ views: -1 });
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Error While Sorting the Data");
  }
};

export default discoveritems;
