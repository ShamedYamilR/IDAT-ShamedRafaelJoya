const mongoose = require("mongoose");

const Product = mongoose.model("Product" , {
    name: String,
    description: String,
    categories: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Category",
        },
    ],
});

module.exports= Product;