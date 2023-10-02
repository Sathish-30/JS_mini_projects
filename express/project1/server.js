import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = process.env.port || 3020;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

// custom middleware for logging
app.use((req, res, next) => {
  console.log("Request Method : ", req.method);
  console.log("Request Url : ", req.url);
  next();
});

app.get("/", (req, res) => {
  // concat the string to attain a real path
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/add-team", (req, res) => {
  const leader = req.body["leaderName"];
  res.send(`The leader of the new team is ${leader}`);
});

app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});
