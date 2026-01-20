// Truthy and Falsey values in JavaScript:-  
// js ne har value ko ya to true ya phir false hai , esa de rakha hai .for checking of any value just write "!!(write value)" in console.

console.log(!!0); // false
console.log(!!1); // true
console.log(!!-1); // true
          //or
console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined));// falsy

// Falsey values :
// false = NaN = undefined = null = "" (empty string) = element.all = 0

console.log(!!"" , !!NaN , !!undefined , !!null , !!0 , !!false);  // false

// Truthy values :
// "(non empty string)" = [] (empty array) = {} (empty object) = function(){} = element (DOM element) = any number other than 0 = rest all values other than falsey values.

console.log(!!"hello" , !![1,2,3] , !!{a:1} , !!function(){ } , !!document.body , !!1234 , !!-1); //true 

// js ne har kisi ka nature decided hai . 
/* if(null){
    console.log("hello");        // hello will not be printed as null nature is falsey .
    }

    if(-1){
    console.log("hello");        // hello will be printed as -1 nature is truthy .
    }
*/  

// true = 1 , false = 0 in js.

// predict the output := 
console.log(true + true); // 2
console.log(false + true); // 1
console.log(false - true);  // -1
console.log(true + 5);      // 6  
console.log(null + 1);     // 1

// conclusion :- 
// 1. js mai true ki value 1 hoti hai or false ki value 0 hoti hai.
// 2. jab bhi koi arithmetic operation true or false ke sath hoga to true or false apne respective numeric values mai convert ho jayega.    

