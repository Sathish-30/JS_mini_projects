import express from "express";

const app = express();
const PORT = process.env.port || 5000;

// Where the callback has two argument a request and the response
// app.get() takes two arguments a endpoint and a call back with req and res object

app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>Hello sathish , it is home page<h1/>");
});

app.get("/about", (req, res) => {
  res
    .send(
      "<h1>I'm Sathish , Currently pursing my 3rd year in sri shakthi institute of engineering and technolog</h1>"
    )
    .sendStatus(200);
});

app.post("/contact/1", (req, res) => {
  res.send("Added contact 1 to the DB").sendStatus(201);
});

app.put("/contact/1", (req, res) => {
  res.send("Updated the contact with put method").sendStatus(200);
});

app.patch("/contact/1", (req, res) => {
  res
    .send(
      "Updated the contact with patch method , which will update a particular field alone in the object"
    )
    .sendStatus(200);
});

app.delete("/contact/1", (req, res) => {
  res.send("<h1>deleted contact with id 1</h1>").sendStatus(200);
});

// If everything is done , then it will trigger a callback
app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});
