import Publish from "../../Model/PublishModel.js";

const Search = async (req, res) => {
  try {
    let result = await Publish.find({});
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Can Not Find Searched Data");
  }
};

export default Search;
