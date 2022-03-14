const express= require("express")

const author =require("../models/author-model.js")

const crudController =require("./crud-controller.js")


const Router =express.Router();

Router.get("",crudController.getData(author))

Router.post("",crudController.post(author));

Router.get("/:id",crudController.authorupdate(author));
 
Router.delete("/:id",crudController.deleteSection(author));


module.exports= Router;