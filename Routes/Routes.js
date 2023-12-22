const express = require("express");
const router = express.Router();
const { createSignup, login } = require("../controller/Controller");
const { StudentSignup } = require("../controller/Student-controller");
const notifyEmail = require("../mail/notifyEmail");

router.post("/signup", createSignup);
router.post("/studentsignup", StudentSignup);
router.post("/login", login);

router.all("/send", async (req, res) => {
  res.json(1);

  try {
    const sent = await notifyEmail({
      email: req.body.email,
      count: 1,
      subject: "Hello, I am New Email on every Route",
    });

    // You may want to handle the 'sent' variable here if needed
    console.log("Email sent:", sent);
  } catch (error) {
    console.error("Error sending email:", error);
    // Handle the error appropriately, e.g., send an error response
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
