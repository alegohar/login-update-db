const mongoose = require("mongoose");

async function MakedbConnect()
{
   await mongoose.connect("mongodb+srv://alegohar:faizaN@cluster0.mbc2nox.mongodb.net/?retryWrites=true&w=majority").
   then(()=> console.log("db Connected")).catch((err) => console.log(err))
}
module.exports = MakedbConnect;