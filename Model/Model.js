const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 2;

const SignupSchema = new mongoose.Schema(
    {
        password: String,
        user: String,
        course: String,
        userType: String,
        status:{type: Boolean, default: false},
        email: String,
    })
      
    SignupSchema.methods.checkPassword = async function (plainPassword) {
        // console.log(this.password, "this password");
        const matched = await bcrypt.compare(plainPassword, this.password); // this method takes hash and the plain password to match according to the hash
        return matched;
        // decrypt
      };
      SignupSchema.pre("save", async function (next) {
        // console.log("this is params", params);
        this.password = await bcrypt.hash(this.password, saltRounds);
         //next();
      });
      const SignupModel = mongoose.model("signups", SignupSchema);

      module.exports = SignupModel;
