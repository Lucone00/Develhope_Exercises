const fs = require("fs");

fs.writeFile("file.txt", "hi i'm the text", () => {
    console.log('write with success')
});

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
