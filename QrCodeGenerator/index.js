// Inquirer.js strives to be an easily embeddable and beautiful command line interface for Node.js
// qr-image package is used to generate the Qr-code from the data that has been recieved
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

console.log("Health check");
inquirer
  .prompt([
    {
      message: "Enter the Url : ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_code.png"));

    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("file saved");
    });
  })
  .catch((err) => {
    console.log(err);
  });
