import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyparser from "body-parser";
// import morgan from "morgan";

const app = express();
const PORT = process.env.port || 3030;
// The below method will convert the url to a dir path
const __dirname = dirname(fileURLToPath(import.meta.url));

// middleware function
const logger = (req, res, next) => {
  console.log("Request Method : ", req.method, " Request Url : ", req.url);
  next();
};

// Where it create a body for the url encoded requests like our form submission
app.use(bodyparser.urlencoded({ extended: true }));

// app.use(morgan('dev'))

// custom middleware
app.use(logger);

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`The server is listening on the port ${PORT}`);
});
