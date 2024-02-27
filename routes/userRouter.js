const express = require("express");

const authController = require("../controllers/authController");
const authMidd = require('../middlewares/authMiddlewares')


const router = express.Router();

router.route("/signup").post(authController.createUser); // localhost:3000/users/signup
router.route("/login").post(authController.loginUser);
router.route("/logout").get(authController.logoutUser);
router.route("/dashboard").get(authMidd, authController.dashboardPage);

module.exports = router;
