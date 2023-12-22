const app = require("./app")
const express = require("express");
const mongoose = require ("mongoose");
const cors = require("cors");
const PORT = 5000;
app.listen(PORT, () => {
  console.log("server started port no :" + PORT);
});

