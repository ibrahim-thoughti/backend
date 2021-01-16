const express = require("express");
const router = express.Router();
const MasterInfo = require("../controllers/masterinfo.controller.js");

router.post("/", MasterInfo.AddMasterInfo);
router.get("/:job_no", MasterInfo.GetData);

module.exports = router;
