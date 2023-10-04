import express from "express";
import "dotenv/config";
import { dirname } from "path";
import { fileURLToPath } from "url";
import connect from "./DBconnection.js";

const app = express();
// console.log(process.env);
const PORT = process.env.port || 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));
// Database connection
try {
  connect();
  console.log("Database connected");
} catch (err) {
  console.log(err);
}

app.use(express.json());

// logger middleware

app.use((req, res, next) => {
  console.log("The request method : ", req.method);
  console.log("The request URL : ", req.url);
  next();
});

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});
