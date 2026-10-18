if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js")


const MONGO_URL = process.env.MongoDB_Atlas;
main()
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => (
        {...obj , owner : "6ac339502c734f6037d9195b"}
     ));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();


    
    
    