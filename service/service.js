const {SignupModel, Assignmentmodel} = require("../Model/Model");
const bcrypt = require("bcrypt");

const createSignup = async (password, user, course, userType, email) => {
  const checkEmail = await SignupModel.findOne({ email: email });
if(!checkEmail)
{
  return await SignupModel.create({password, user, course, userType, email});
}
else {
  console.log("Email Already exist, Please sign in");
  
}  
}

  const loginwithpassword = async (email, password) => {
    try {
      const user = await SignupModel.findOne({ email: email });
  
      if (user) {
        console.log("Email successfully found");
  
        // Hash the provided password with two salt rounds
        const hashedPassword = await bcrypt.hash(password, 2);
  
        
        if (hashedPassword) {
          return {
            success: true,
            message: "Login Successful",
            status: 200,
          };
        } else {
          return {
            success: false,
            message: "User found but password is incorrect",
            status: 400,
          };
        }
      } else {
        return {
          success: false,
          message: "User not found",
          status: 404,
        };
      }
    } catch (error) {
      console.error("Error in loginwithpassword:", error);
      return {
        success: false,
        message: "Internal Server Error",
        status: 500,
      };
    }
  };
  
  module.exports = { createSignup, loginwithpassword };
  