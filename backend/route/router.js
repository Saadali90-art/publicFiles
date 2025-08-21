import express from "express";
import sendData from "../controller/UserInfo/SignUp.js";
import getSignIn from "../controller/UserInfo/SignInData.js";
import deleteUser from "../controller/UserInfo/DeleteUser.js";
import Login from "../controller/UserInfo/Login.js";
import getPublish from "../controller/Books/Dashboard.js";
import PublishOne from "../controller/Books/Publish.js";
import ProtectedPages from "../controller/UserInfo/Protect.js";
import alsolike from "../controller/AlsoLike.js";
import comment from "../controller/Comments/Comments.js";
import newArrivals from "../controller/NewArrivals.js";
import getComments from "../controller/Comments/getComments.js";
import moreInfo from "../controller/Books/MoreInfo.js";
import discoveritems from "../controller/Books/DiscoverItems.js";
import weeklyTop from "../controller/Books/Weeklytop.js";

let router = express.Router();

router.post("/", sendData);

router.get("/", getSignIn);

router.delete("/", deleteUser);

router.post("/login", Login);

router.get("/user/dashboard", getPublish);

router.post("/user/publish", PublishOne);

router.get("/protect", ProtectedPages);

router.post("/youlike", alsolike);

router.post("/comment", comment);

router.get("/newarrivals", newArrivals);

router.post("/allcomments", getComments);

router.post("/getmoreinfo", moreInfo);

router.get("/discover", discoveritems);

router.get("/weeklytop", weeklyTop);

export default router;
