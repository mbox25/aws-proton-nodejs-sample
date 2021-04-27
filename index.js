const express = require("express");

const app = new express();

app.get("/", (req, res) =>
  res.send({ status: "✅ success", message: "proton is awesome ❤️" })
);

app.get("/test1", (req, res) =>
  res.send({ status: "success", message: "this is just test!!!" })
);

app.listen(80, () => console.log("server listening on 80"));
