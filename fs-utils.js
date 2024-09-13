import fs from "fs";

//Function to Create Directory and Write file inside the directory
const createDir = () => {
  try {
    if (!fs.existsSync("files")) {
      // If file doesn't exist create directory
      fs.mkdirSync("files");
    }
    //Converted Date-Time to file name format
    let date = new Date().toString();
    let textDate = date.toString();
    let txt = textDate.split(":").join("-");
    // Write file with file name in Date format and content with current timestamp
    fs.writeFileSync(`./files/${txt}.txt`, `TimeStamp : ${Date.now()}`);
  } catch (error) {
    console.log(`Error creating Dir : ${error.message}`);
  }
};

//Function to Read Folder with the file name
const readFolder = (folderName) => {
  try {
    const files = fs.readdirSync(folderName);
    return files;
  } catch (error) {
    console.log(`Error reading: ${error.message}`);
  }
};

export { createDir, readFolder };