const mongoose = require("mongoose");

const Category = mongoose.model("Category",{
    name: String,
    desciption: String,

});

module.exports = Category;