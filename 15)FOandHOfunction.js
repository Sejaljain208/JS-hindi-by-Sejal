// FOF(first order function) and HOF(higher order function) in JavaScript

// 1) First Order Function (FOF): A function that does not take another function as an argument and does not return a function as its result.   
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log("Sum using FOF:", sum); // output: Sum using FOF: 15

// 2) Higher Order Function (HOF): A function that takes another function as an argument or returns a function as its result.
function abcd (val){
    return function (multiplier){
        return val * multiplier;
    }
}
let multiplyBy2 = abcd(2); // returns a function that multiplies by 2
let result = multiplyBy2(5); // calls the returned function with 5
console.log("Result using HOF:", result); // output: Result using HOF: 10 

// Example of HOF that takes a function as an argument
function efgh (callback){
    callback();
}
efgh(function(){
     console.log("This is a callback function passed to HOF");
} );
// output: This is a callback function passed to HOF

// pure and impure functions
// Pure Function: jo bahar ki value ko change na kare .
// impure function : jo bahar ki values change kare .
let a = 10;
function add (x) {
    console.log("hehehe");                           // pure function                   
}   
function hui(){
    a++;                                              // impure function 
}

// closures and lexical scoping 

// closure : ek function jo return kare ek or function 
function hu(){
    let ab = 12;
    return function(){
        console.log(ab);
    }
}

//lexicol scope : variable ka physical scope kya hai 
function hehe(){
    let abb = 10;                        
    function bebe(){
      let baa = 12 ;
      function sese(){
        let aba = 14 ;
      }
    }
}