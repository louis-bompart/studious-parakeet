import * as jsonFile from './myJsonFile.json'
import syntheticJsonfile from './myJsonFile.json'

var myFile = jsonFile;

console.log(myFile.Foo) // Undefined
console.log(jsonFile.Foo) // Bar.
console.log(syntheticJsonfile.Foo) // Bar.