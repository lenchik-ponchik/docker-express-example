const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("This docker example is working");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
