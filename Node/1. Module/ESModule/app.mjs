// Destructuring on the fly
import { calcFunction, userName } from "./calcFile.mjs";
var firstName = "Divyanshu Tyagi";

// a = 10; //* This will give error as we are using es6 module which use the strict mode

var a = 10;
console.log(a);
console.log(firstName);
console.log(userName);

calcFunction(10, 20);
