const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = { app, server };
