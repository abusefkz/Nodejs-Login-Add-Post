const express = require("express");
const pageController = require("../controllers/pageController");
const redirectMiddleware = require('../middlewares/redirectMiddleware')

const router = express.Router();

router.route("/").get(pageController.indexPage);
router.route("/about").get(pageController.aboutPage);
router.route("/register").get(redirectMiddleware, pageController.registerPage);
router.route("/login").get(redirectMiddleware, pageController.loginPage);


module.exports = router;
