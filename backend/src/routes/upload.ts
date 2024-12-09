import express from "express";
import upload from "../utils/uploadPdf";

const uploadRoute = express.Router();

uploadRoute.post("/upload-pdf", upload.single("pdf"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // The file has been uploaded successfully
    return res.status(200).json({
      message: "File uploaded successfully",
      fileLocation: (req.file as any).location, // S3 URL of the uploaded file
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: "Error uploading file" });
  }
});

// Multiple files upload (if needed)
uploadRoute.post("/upload-multiple-pdfs", upload.array("pdfs", 5), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    // Files have been uploaded successfully
    return res.status(200).json({
      message: "Files uploaded successfully",
      fileLocations: (req.files as any[]).map((file) => file.location), // Array of S3 URLs
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: "Error uploading files" });
  }
});

export default uploadRoute;