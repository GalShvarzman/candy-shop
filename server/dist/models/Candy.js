"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var candySchema = mongoose.Schema({
    candyName: String,
    price: Number,
    countInStock: Number
});
exports.Candy = mongoose.model('Candy', candySchema);
//# sourceMappingURL=Candy.js.map