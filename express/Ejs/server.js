import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

console.log(process.env);
const app = express();
const PORT = process.env.port || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  const date = new Date().getDay();
  const day = date == 0 ? "weekend" : "weekday";
  const description = day === "weekend" ? "Have fun" : "work hard";
  res.render("index.ejs", {
    day: day,
    description: description,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening to the port : ${PORT}`);
});
