const {StudentSignup, loginwithpassword} = require("../service/service");
// exports.createSignup = async(req,res)=>{
// const {password, user, course, userType} = req.body;
// req.body.userType = "Teacher";
// const signupdata = await createSignup(password, user, course, userType);

// //pass.checkPassword(password, pass.password);
// res.json(signupdata);
// }
exports.StudentSignup = async (req, res) => {
    // Extracting data from the request body
    const { password, user, course, userType } = req.body;

    // Setting userType to "Teacher"
    req.body.userType = "Student";
  
    try {
        // Calling createSignup function with the modified request body
        const signupData = req.body;
    
        // Responding with all the fields in the signupdata
        res.json(signupData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    };
    exports.login = async (req, res) => {
      const { id, password } = req.body;
      const { success, message, status } = await loginwithpassword(
        id,
        password
      );
      res.status(status).json({
        success,
        message,
      });
    };