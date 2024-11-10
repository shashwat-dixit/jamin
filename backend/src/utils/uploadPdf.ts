import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import { Request } from "express";

type UploadConfigType = multer.Multer;

const s3: S3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
  region: "ap-south-1",
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"));
  }
};

const upload: UploadConfigType = multer({
  fileFilter: fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: "jamin",
    key: function (
      req: Request,
      file: Express.Multer.File,
      cb: (error: any, key?: string) => void
    ) {
      const uniqueFileName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueFileName);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
  }),
});

export default upload;
