const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.get("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.delete("/admin/deleteData", (req, res) => {
  res.send("Deleted a data successfully");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent");
});

app.get("/user/login", (req, res) => {
  res.send("Login page sent to the browser");
});

app.listen(7777, () => {
  console.log("App is listening successfully on port 7777...");
});
