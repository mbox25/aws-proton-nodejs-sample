const express = require("express");

const app = new express();

app.get("/test1", (req, res) =>
  res.send({ status: "success", message: "테스트" })
);

app.get("/", (req, res) =>
  res.send({ status: "success", message: "✅ AWS Proton" })
);

app.listen(80, () => console.log("server listening on 80"));
