const express = require("express");
const router = express.Router();
const login = require("../controllers/userlogin.controller.js");

router.post("/", login.AddUserLogin);

module.exports = router;
