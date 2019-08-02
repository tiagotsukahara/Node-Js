const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello APP");
});

app.listen(3000);
