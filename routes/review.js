const express = require("express");
const router = express.Router({ mergeParams : true});
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js");
const reviewController = require("../controller/review.js");

// Review Route
router.post("/" ,isLoggedIn,validateReview, reviewController.CreateReview );

router.delete("/:reviewId" ,isLoggedIn,isAuthor , reviewController.deleteReview);

module.exports = router;