"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var candiesRouter_1 = require("./routes/candiesRouter");
var app = express();
mongoose.connect('mongodb://localhost:27017/candies', { useNewUrlParser: true });
app.use(cors());
app.use(express.json());
app.use('/candies', candiesRouter_1.candiesRouter);
app.listen(4000, function () { return (console.log("listening on port 4000")); });
//# sourceMappingURL=app.js.map