// importing File System Module
const fs = require("fs");

const text = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(text);

const newTxt = `Hey Brother, Here Are Some Lines 
${text}
${Date.now()}`;

const txtWrite = fs.writeFileSync("./txt/outputFile.txt", newTxt);
