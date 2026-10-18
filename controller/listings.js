const Listing = require("../models/listing.js");
const WrapAsync = require("../utils/WrapAsync.js");

module.exports.allListing = WrapAsync(async (req,res) => {
    console.log("route reached");
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
});

module.exports.newListingForm = (req,res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = WrapAsync(async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path : "reviews", populate : {path : "author",}}).populate("owner");
    if(!listing){
        req.flash("error" , "listing does not exist");
        res.redirect("/litings");
    }
    res.render("listings/show.ejs" , {listing});

});

module.exports.editForm = WrapAsync(async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs" , {listing});

});

module.exports.edit = WrapAsync(async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    req.flash("success" , "Listing is updated");
    res.redirect(`/listings/${id}`);
});

module.exports.newListing =  WrapAsync(async (req,res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success" , "new listing created");
    res.redirect("/listings");
});

module.exports.delete = WrapAsync(async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success" , "Listing is deleted");
    res.redirect("/listings");
});