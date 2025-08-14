import express from "express";
import sendData from "../controller/SignUp.js";
import getSignIn from "../controller/UserDataSignIn.js";
import deleteUser from "../controller/DeleteUser.js";
import Login from "../controller/Login.js";
import getPublish from "../controller/Dashboard.js";
import PublishOne from "../controller/Publish.js";
import ProtectedPages from "../controller/Protect.js";

let router = express.Router();

router.post("/", sendData);

router.get("/", getSignIn);

router.delete("/", deleteUser);

router.post("/login", Login);

router.get("/user/dashboard", getPublish);

router.post("/user/publish", PublishOne);

router.get("/protect", ProtectedPages);

export default router;
