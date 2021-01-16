const express = require("express");
const router = express.Router();
const register = require("../controllers/registration.controller.js");

// router.get("/test", (req, res) => {
//     res.json({ message: "Registration..."});
// });
// router.route("/test").get((req, res) => {
//     res.json({ message: "Registration...."});
// });

router.post("/register", register.AddRegistration);
router.get("/register/:registration_id", register.GetRegistered);

module.exports = router;
