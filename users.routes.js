const express = require("express");
const router = express.Router();
const create_user = require("../controllers/users/register-user.controller.js");

router.post("/users", create_user);

module.exports = router;
