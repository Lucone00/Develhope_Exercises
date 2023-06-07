const fs = require("fs/promises");

fs.readFile("./file1.txt", "utf8")
  .then((data1) => console.log("data1:", data1))
  .then(() => fs.readFile("file2.txt", "utf8"))
  .then((data2) => console.log("data2", data2))
  .catch((err) => console.error(err));