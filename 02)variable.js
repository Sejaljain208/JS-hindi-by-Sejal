// variable can be declared using var, let, or const

//VAR: old and risky
/* 1) function scope, not block scope
    2) can be redeclared and reassigned
    3) hoisted to the top with undefined value
*/

//LET: modern and safer
/* 1) block scope
    2) cannot be redeclared in the same scope, but can be reassigned
    3) hoisted to the top but not initialized (temporal dead zone)
*/

//CONST: modern and safest
/* 1) block scope
    2) cannot be redeclared or reassigned
    3) hoisted to the top but not initialized (temporal dead zone)
*/

//var,let , const :example

var a = 10; // function-scoped or globally-scoped
let b = 20; // block-scoped
const c = 30; // block-scoped and cannot be reassigned

console.log("var a:", a); // Output: var a: 10
console.log("let b:", b); // Output: let b: 20
console.log("const c:", c); // Output: const c: 30

// Example of reassignment
a = 15; // valid
b = 25; // valid
// c = 35; // invalid, will throw an error      

console.log("Reassigned var a:", a); // Output: Reassigned var a: 15
console.log("Reassigned let b:", b); // Output: Reassigned let b: 25

//example of redeclaration
var a = 50; // valid
//let b = 60; // invalid, will throw an error
// const c = 70; // invalid, will throw an error        

console.log("Redeclared var a:", a); // Output: Redeclared var a: 50

// some problem with var
/* 1) window mai add hota hai
   2) function scope hota hai
    3) redeclare hota hai
    4) hoisting hota hai
*/

//scope in real life
// let and const are block scoped
// var is function scoped

// common confusion

// 1)const doesn't make things fully conatant .it protect the variable  not the value . 
const person ={
    name : "sejal"
};
person.name = "shreya"; // valid
person = {}; // invalid , will throw an error
console.log("Modified person name:", person.name); // Output: Modified person name: shreya

// 2) var doesnot respect blocks     
if(true){
    var x = 100; // valid   
    let y = 200; // valid
}
console.log("var x:", x); // Output: var x: 100
//console.log("let y:", y); // invalid , will throw an error

//3) tdz (temporal dead zone): the time between the block scope starts and the variable is declared 
console.log("let p before declaration:", p); // invalid , will throw an error
let p = 500;    
console.log("let p after declaration:", p); // Output: let p after declaration: 500

// 4) hoisting: when a variable is declared using var , it is hoisted to the top with undefined value
console.log("hoisted var z:", z); // Output: hoisted var z: undefined
var z = 300;    
//console.log("hoisted let w:", w); // invalid , will throw an error
let w = 400;    

