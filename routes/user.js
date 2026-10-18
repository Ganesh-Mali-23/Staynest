const express = require("express");
const passport = require("passport");
const router = express.Router();
const userController = require("../controller/user.js")

const { saveRedirectUrl } = require("../middleware.js");

router.get("/signup", userController.signUpForm );

router.post("/signup",saveRedirectUrl , userController.signUpSubmit);

router.get("/login", userController.loginForm );

router.post("/login" , saveRedirectUrl , passport.authenticate("local" , {failureRedirect: "/login",failureFlash : true,}) , userController.loginSubmit);

router.get("/logout" , userController.logout);

module.exports = router;