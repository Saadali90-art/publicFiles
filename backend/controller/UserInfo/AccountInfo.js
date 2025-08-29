import jsonwebtoken from "jsonwebtoken";
import SignModel from "../../Model/SignInModel.js";

const accountInfo = async (req, res) => {
  let token = req.headers.tokeninfo;
  let data = req.body;
  let newtoken = null;

  let tokenData = await jsonwebtoken.verify(token, process.env.secretkey);

  // ========== MAKING NEW TOKEN IF THE NAME IS CHANGED ============

  if (tokenData.name !== data?.name?.trim()) {
    let tokeninfo = {
      name: data?.name?.trim(),
      userId: tokenData.userId,
    };

    newtoken = await jsonwebtoken.sign(tokeninfo, process.env.secretkey);
  }

  try {
    // ============= Obtaining Complete User Data =============

    let userData = await SignModel.findOne({
      name: tokenData.name,
      userId: tokenData.userId,
    });

    if (userData === null)
      return res.status(400).json({ message: "User Does Not Exist" });

    // ============ CHECKING IF NEW EMAIL IS NOT ASSIGNED TO ANY ONE ELSE ==============

    if (userData.email === data.email) {
      // ========= UPDATING DATA ============

      let updateData = await SignModel.updateOne(
        { name: userData.name, userId: userData.userId },
        {
          $set: {
            name: data?.name?.trim(),
            gender: data.gender,
            location: data.location,
            email: data.email,
            about: data.about,
            image: data.image,
            coverimage: data.coverimage,
          },
        }
      );

      if (
        data?.name?.trim() === "" ||
        data?.name?.trim() === null ||
        data?.name?.trim() === undefined
      ) {
        res.status(200).json({ message: "Data Updated" });
      }
      if (data.name) {
        res.status(200).json({ message: "Data Updated", token: newtoken });
      }
    } else {
      let email = await SignModel.findOne({ email: data.email });

      console.log(email);

      if (email === null) {
        // ========= UPDATING DATA ============

        let updateData = await SignModel.updateOne(
          { name: userData.name, userId: userData.userId },
          {
            $set: {
              name: data?.name?.trim(),
              gender: data.gender,
              location: data.location,
              email: data.email,
              about: data.about,
              image: data.image,
              coverimage: data.coverimage,
            },
          }
        );

        if (
          data?.name?.trim() === "" ||
          data?.name?.trim() === null ||
          data?.name?.trim() === undefined
        ) {
          res.status(200).json({ message: "Data Updated" });
        }
        if (data.name) {
          res.status(200).json({ message: "Data Updated", token: newtoken });
        }
      } else {
        res.status(401).json({ message: "Email Already Taken" });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Error In the Account Informations");
  }
};
export default accountInfo;
