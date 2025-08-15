import express from "express";
import sendData from "../controller/SignUp.js";
import getSignIn from "../controller/UserDataSignIn.js";
import deleteUser from "../controller/DeleteUser.js";
import Login from "../controller/Login.js";
import getPublish from "../controller/Dashboard.js";
import PublishOne from "../controller/Publish.js";
import ProtectedPages from "../controller/Protect.js";
import alsolike from "../controller/AlsoLike.js";
import comment from "../controller/Comments.js";
import newArrivals from "../controller/NewArrivals.js";
import getComments from "../controller/getComments.js";

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

export default router;
