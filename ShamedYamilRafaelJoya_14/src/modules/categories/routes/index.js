const { Router } = require("express");
const {
    createCategory,
    findAll,
    deleteOne,
    findOne,
} = require("../services/category.service");


const routes = Router();

routes.post("/", createCategory);
routes.post("/", findAll);
routes.post("/", deleteOne);
routes.post("/:id",findOne);
module.exports = routes;