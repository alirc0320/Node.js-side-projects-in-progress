const fs = require("fs");
const { fileURLToPath } = require("url");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

//To parse
// 1) Read from file
// 2) Turn to string
// 3) Parse

//To add to file
//1) Turn to string
//2) Write to file

const dataRead = fs.readFileSync("1-json.json");
const dataString = dataRead.toString();
const data = JSON.parse(dataString);
data.name = "Ali";
data.age = 19;
console.log(data);

const Ali = JSON.stringify(data);
fs.writeFileSync("1-json.json", Ali);
