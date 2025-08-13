import { Publish } from "../Model/model.js";

// ========================== GETTING DATA PUBLISHED BY USER =============================

const getPublish = async (req, res) => {
  try {
    let data = await Publish.find({});

    if (data.length !== 0) {
      res.status(200).json(data);
    } else {
      res.status(201).json({ message: "Data Not Present" });
    }
  } catch (error) {
    console.log("Can Not Get Data From DB", error.message);
  }
};

export default getPublish;
