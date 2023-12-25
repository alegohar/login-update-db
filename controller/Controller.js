const {createSignup, loginwithpassword} = require("../service/service");
// exports.createSignup = async(req,res)=>{
// const {password, user, course, userType} = req.body;
// req.body.userType = "Teacher";
// const signupdata = await createSignup(password, user, course, userType);

// //pass.checkPassword(password, pass.password);
// res.json(signupdata);
// }
exports.createSignup = async (req, res) => {
    // Extracting data from the request body
    const { password, user, course, userType, email } = req.body;

    // Setting userType to "Teacher"
    req.body.userType = "Teacher";
    
    const TeacherData = await createSignup(password, userType, course, userType, email);
    TeacherData.checkPassword(password, TeacherData.password);
    TeacherData.save();
    res.json(TeacherData);
   
    };
    exports.login = async (req, res) => {
        const { email, password } = req.body;
        const { success, message, status } = await loginwithpassword(
          email,
          password
        );
        res.status(status).json({
          success,
          message,
        });
      };  

      exports.data = async (req,res)=>{
        const datarecords = SignupModel.find();
        res.json(datarecords);
        }