const User = require("../models/user.js");
const WrapAsync = require("../utils/WrapAsync");
module.exports.loginForm = (req,res) => {
    res.render("users/login.ejs");
};

module.exports.signUpForm = (req,res) => {
    res.render("users/signup.ejs");
};

module.exports.signUpSubmit = WrapAsync(async(req ,res) => {
    try{
        let {username , email , password} = req.body;
        const newuser = new User({email , username});
        const registeredUser = await User.register(newuser,password);
        req.login(registeredUser , (err) => {
        if(err){
            return next(err);
        }
        req.flash("sucess" , "Welcome to Wandernest");
        let redirectUrl = res.locals.redirectUrl || "/listings" ;
        res.redirect(redirectUrl);
        });      
    }catch(e){
        req.flash("error" , e.message);
        res.redirect("/signup");
    }
});

module.exports.loginSubmit = WrapAsync(async(req,res) => {
    req.flash("success" , "Welcome back to wandernest!");    
    let redirectUrl = res.locals.redirectUrl || "/listings" ;
    res.redirect(redirectUrl);
});

module.exports.logout =  WrapAsync(async(req,res) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success" , "you are logged out");
        res.redirect("/listings");
    })
});

