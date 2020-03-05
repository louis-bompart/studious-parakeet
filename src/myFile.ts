import * as jsonFile from "./myJsonFile.json";
import syntheticJsonfile from "./myJsonFile.json"; // Not allowed by TypeScript without allowSyntheticDefaultImports.
const myRequiredFile = require("./myJsonFile.json");

var myFile = jsonFile;

console.log(myRequiredFile.Foo); // Undefined
console.log(myFile.Foo); // Undefined
console.log(jsonFile.Foo); // Bar.
console.log(syntheticJsonfile.Foo); // Bar.
