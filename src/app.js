const express = require("express");

const app = express();

// app.use((req, res) => {
//   res.send("This is a response");
// });

// app.use("/", (req, res) => {
//   res.send("This is a / response from port 7777...");
// });

// app.use("/dsah", (req, res) => {
//   res.send("This is a dsah response from port 7777...");
// });

app.use("/dash", (req, res) => {
  res.send("This is a dash response from port 7777...");
});

app.listen(7777, () => {
  console.log("App is listening successfully on port 7777...");
});
