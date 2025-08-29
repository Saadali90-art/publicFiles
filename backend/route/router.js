import express from "express";
import sendData from "../controller/UserInfo/SignUp.js";
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
import MontlyPicks from "../controller/Books/MontlyPicks.js";
import SignInData from "../controller/UserInfo/SignInData.js";
import Titles from "../controller/Books/Titles.js";
import Search from "../controller/Books/Search.js";
import CategoryData from "../controller/Books/CategoryData.js";
import accountInfo from "../controller/UserInfo/AccountInfo.js";

let router = express.Router();

router.post("/signup", sendData);

router.get("/signindata", SignInData);

router.delete("/deleteUser", deleteUser);

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

router.get("/monthlypicks", MontlyPicks);

router.get("/titles", Titles);

router.get("/searches", Search);

router.post("/category", CategoryData);

router.get("/allBooks", Search);

router.get("/myaccount", SignInData);

router.post("/changeinfo", accountInfo);

export default router;
