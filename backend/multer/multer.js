import multer from "multer";
import path from "path";
import fs, { existsSync, rmdir } from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads/";

    if (file.fieldname === "bookImage") {
      folder = "uploads/bookImage/";
    }

    if (file.fieldname === "coverImage") {
      folder = "uploads/coverImage";
      if (fs.existsSync(folder)) {
        fs.rmdirSync(folder, { recursive: true });
      }
      fs.mkdirSync(folder, { recursive: true });
    }

    if (file.fieldname === "profileImage") {
      folder = "uploads/profileImage";
      if (existsSync(folder)) {
        fs.rmdirSync(folder, { recursive: true, force: true });
      }
      fs.mkdirSync(folder, { recursive: true });
    }

    cb(null, folder);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    let uniqueName = Date.now() + ext;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

export default upload;
