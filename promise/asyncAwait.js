const fs = require("fs/promises");

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
clg 
outputFile();


//quando usare await oppure then? ed il try catch? 
// il catch serve solo per aggiungere l'handler di errore? 