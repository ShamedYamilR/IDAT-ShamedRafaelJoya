const { request, response } = require("express");

const Product = require("../models/producto.model");

const createProducts = async ( req, res) => {
const {name, description, categories} = req.body;

const newProduct = await new Product({
    name,
    description,
    categories
}).save();

res.json(newProduct);

};

const findAll = async (req = request, res = response) => {
const products = await Product.find().populate("categories").populate({

    path: "categories",
    model: "Category",
    populate: "parentCategory",
});
res.json(products);
};

module.exports = {
    createProducts,
    findAll,
}