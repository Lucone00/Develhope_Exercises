const fs = require("fs/promises");
/*
async function outputFile() {
  try {
    const data1 = await fs.readFile("./file1.txt", { encoding: "utf-8" });
    console.log("data 1:", data1);

    const data2 = await fs.readFile("./file2.txt", { encoding: "utf-8" });
    console.log("data 2:", data2);

    const data3 = await fs.readFile("./file3.txt", { encoding: "utf-8" });
    console.log("data 3:", data3);
  } catch (err) {
    console.error(err);
  }
}

outputFile();*/

async function outputFilesTogheter() {
  try {
    const data = await Promise.all([
      fs.readFile("promise/file1.txt", "utf8"),
      fs.readFile("promise/file2.txt", "utf8"),
      fs.readFile("promise/file3.txt", "utf8"),
    ]);

    console.log("data:", data);
  } catch (err) {
    console.error(err);
  }
}
clg
outputFilesTogheter()