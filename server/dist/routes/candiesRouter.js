"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Candy_1 = require("../models/Candy");
var express = require("express");
exports.candiesRouter = express.Router();
exports.candiesRouter.get('/', function (req, res) {
    Candy_1.Candy.find()
        .then(function (candies) {
        res.json(candies);
    })
        .catch(function (err) {
        res.status(500).send(err);
    });
});
exports.candiesRouter.get('/:candyName', function (req, res) {
    Candy_1.Candy.findOne({ candyName: req.params.candyName })
        .then(function (candy) {
        res.json(candy);
    })
        .catch(function (err) {
        res.status(500).send(err);
    });
});
exports.candiesRouter.post('/', function (req, res) {
    var candy = new Candy_1.Candy(req.body);
    candy.save()
        .then(function () {
        res.json(candy);
    })
        .catch(function (err) {
        res.status(500).send(err);
    });
});
exports.candiesRouter.patch('/:candyName', function (req, res) {
    Candy_1.Candy.findOne({ candyName: req.params.candyName })
        .then(function (candy) {
        candy.countInStock--;
        candy.save()
            .then(function () {
            res.json(candy);
        });
    })
        .catch(function (err) {
        res.status(500).send(err);
    });
});
exports.candiesRouter.delete('/:candyName', function (req, res) {
    Candy_1.Candy.deleteOne({ candyName: req.params.candyName })
        .then(function (data) {
        res.json(data._doc);
    });
});
//# sourceMappingURL=candiesRouter.js.map