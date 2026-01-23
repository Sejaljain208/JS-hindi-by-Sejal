// typeof and intanceof operator

// typeof operator is used in primitive data types to know the type of variable
let s = "5";
console.log(typeof s); // string

console.log(typeof null); // object . it is a bug in js , null is primitive type.
console.log(typeof array); // object . array is reference type.that why we use instanceof to check array type..

// instanceof operator is used in reference types to check the type of object
let b = {};
console.log(b instanceof Object); // true
console.log(b instanceof Array); // false

let arr = [];
console.log(arr instanceof Array); // true .it is array ,but it is a quirk in js that array is also object.

function p() {};
console.log(p instanceof Function); // true
console.log(p instanceof Object); // true . function is also object in js.