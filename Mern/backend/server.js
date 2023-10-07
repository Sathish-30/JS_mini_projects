import express from "express";
import cors from "cors";
import "dotenv/config";
import TodoModel from "./models/todo.js";
import connection from "./config/DBconnection.js";

const app = express();
const PORT = process.env.port || 8000;
try {
  connection();
  console.log("Database created");
} catch (err) {
  console.log(err);
}
app.use(cors());

// The below line of code is for logger
app.use((req, res, next) => {
  console.log(`The request method : ${req.method}`);
  console.log(`The request URL : ${req.url}`);
  next();
});

// converting the data to req body in the middleware itself
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});
app.post("/add", (req, res) => {
  const task = req.body.task;
  console.log(task);
  TodoModel.create({
    task: task,
  })
    .then((result) => {
      res.json(result);
      console.log("A record has been added");
    })
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`The server is listening in the port ${PORT}`);
});
