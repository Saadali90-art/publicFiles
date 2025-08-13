import express from "express";
import sendData from "../controller/SignUp.js";
import getSignIn from "../controller/HomeSignin.js";
import deleteUser from "../controller/DeleteUser.js";
import Login from "../controller/Login.js";
import getPublish from "../controller/Dashboard.js";
import PublishOne from "../controller/Publish.js";
import getDashHome from "../controller/dashhome.js";
import authentication from "../middleware/auth.js";

let router = express.Router();

router.post("/", sendData);

router.get("/", getSignIn);

router.delete("/", deleteUser);

router.post("/login", Login);

router.get("/user/dashboard", authentication, getPublish);

router.get("/dashhome", getDashHome);

router.post("/user/publish", PublishOne);

export default router;
