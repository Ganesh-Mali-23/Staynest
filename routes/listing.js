const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner , validateListing } = require("../middleware.js");
const listingController = require("../controller/listings.js");

router.get("/" , listingController.allListing );

router.get("/new" ,isLoggedIn, listingController.newListingForm);

router.get("/:id" , listingController.showListing);

// edit
router.get("/:id/edit" ,isLoggedIn ,validateListing ,listingController.editForm);

// edit/Update
router.put("/:id" ,isLoggedIn ,isOwner ,validateListing, listingController.edit );

// Create 
router.post("/new" ,isLoggedIn ,validateListing , listingController.newListing);

// Delete Route
router.delete("/:id" ,isLoggedIn,isOwner , listingController.delete);

module.exports = router;