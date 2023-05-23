const names = require("./names");
const sayHi = require("./utils");

sayHi("Oana");
sayHi(names.john);
sayHi(names.peter);

module.exports.items = ["item1", "item2"];
