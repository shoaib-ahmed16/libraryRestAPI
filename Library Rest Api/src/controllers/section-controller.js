const express= require("express")

const section =require("../models/section-model.js")

const crudController =require("./crud-controller.js")


const Router =express.Router();

Router.get("",crudController.getData(section))

Router.post("",crudController.post(section));

Router.patch("/:id",crudController.update(section));

Router.delete("/:id",crudController.deleteSection(section));


module.exports= Router;