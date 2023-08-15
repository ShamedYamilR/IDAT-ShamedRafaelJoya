const { Router } = require("express");
const uploadImage = require("../../../middleware/file.middleware");

const routes = Router();

const service = (req, res ) => {
    console.log(req.body);

    res.send("send");
};

routes.post("/", uploadImage, service);

module.exports = routes;