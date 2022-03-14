const express= require("express")

const book =require("../models/book-model.js")

const crudController =require("./crud-controller.js")


const Router =express.Router();

Router.get("",crudController.getData(book))

Router.post("",crudController.post(book));

Router.get("/:id",crudController.bookupdate(book));

Router.patch("/:id",crudController.update(book));

Router.delete("/:id",crudController.deleteSection(book));


module.exports= Router;