const express = require("express");
const router = express.Router();

const masterInfo = require("./masterinfo.route");
router.use("/masterinfo", masterInfo);

const userLogin = require("./userlogin.route");
router.use("/login", userLogin);

const register = require("./registration.route");
router.use("/register", register);

module.exports = router;
