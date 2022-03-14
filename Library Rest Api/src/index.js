const express = require("express");

const sectionController =require("./controllers/section-controller.js");
const bookController =require("./controllers/book-controller.js");
const authorController =require("./controllers/author-controller.js");

const app =express();

app.use(express.json());

app.use("/section",sectionController)

app.use("/book",bookController)

app.use("/author",authorController)

module.exports =app;