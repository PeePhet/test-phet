const express = require("express");
const IP = require("ip");

const app = express();

app.get("/", (req, res) => {
  res.send("สวัสดี");
  const address = IP.address();
  console.dir(address);
});

app.listen(9600, () => {
  console.log("start");
});

module.exports = app;
