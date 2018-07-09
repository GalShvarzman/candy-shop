"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/candies', function (req, res) {
    res.json([{ candyName: "OREO",
            price: 6,
            countInStock: 3 }]);
});
app.get('/candies/:id', function (req, res) {
    res.json({ message: "not supported" });
});
app.post('/candies', function (req, res) {
    res.json({ message: "not supported" });
});
app.listen(4000, function () {
    console.log("listening on port 4000");
});
//# sourceMappingURL=app.js.map