// First
const express = require("express");

// second
const app = express();

// fourth
app.get("/", (req, res) => {
  // res.send("Hey you hit the server!!!");
  res.json({
    name: "Harish",
    class: "None",
  });
});

app.post("/", (req, res) => {
  res.send("Hey you hitted POST!!");
});

// third
app.listen(8000, () => {
  console.log("App is node listening to port !!!");
});
