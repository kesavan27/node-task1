import express from "express";
import { createDir, readFolder } from "./fs-utils.js";

const app = express();

//API endpoint to '/create-file'
app.get("/create-file", (req, res) => {
  createDir();
  res.send({ msg: "File created successfully" });
});

//API endpoint to '/read-files'
app.get("/read-files", (req, res) => {
  const files = readFolder("files");
  res.send(files);
});

//Acknopwledge API is running
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});