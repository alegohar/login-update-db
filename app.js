const express = require("express");
const cors = require("cors");
const passwordroutes = require("./Routes/Routes");
const MakedbConnect = require("./Database/Database");
MakedbConnect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(passwordroutes);
module.exports = app; // default export
