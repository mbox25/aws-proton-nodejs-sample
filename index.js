const express = require("express");

const app = new express();

app.get("/test1", (req, res) =>
  res.send({ status: "success", message: "1. this is just test!!!" })
);

app.get("/test2", (req, res) =>
  res.send({ status: "success", message: "2. this is just test!!!" })
);

app.get("/", (req, res) =>
  res.send({ status: "✅ success", message: "proton is awesome ❤️" })
);

app.get("/test3", (req, res) =>
  res.send({ status: "success", message: "3. this is just test!!!" })
);

app.listen(80, () => console.log("server listening on 80"));
