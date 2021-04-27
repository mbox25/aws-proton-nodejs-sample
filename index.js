const express = require("express");

const app = new express();

app.get("/test1", (req, res) =>
  res.send({ status: "success", message: "this is just test!!!" })
);

app.get("/", (req, res) =>
  res.send({ status: "✅ success", message: "proton is awesome ❤️" })
);

app.listen(80, () => console.log("server listening on 80"));
