import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./route/router.js";
import connectDB from "./connect.js";

let app = express();

dotenv.config();
let PORT = process.env.PORT;
let db_url = process.env.db_url;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// express.urlencoded() converts the query string in the request body into a JavaScript object and puts it in req.body
app.use(cors());
connectDB(db_url);
app.use("/", router);

app.listen(PORT, () => {
  console.log("server up..");
});
