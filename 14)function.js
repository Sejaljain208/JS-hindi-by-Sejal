// Function in javaScript : it a block of reusable code .

// 1) Function Declaration:--
function greet() {
    console.log("Hello, welcome to JavaScript functions!");
}
greet();                                // Function Call
// output: Hello, welcome to JavaScript functions!

// 2) Function with Parameters
function welcomeUser(name) {
    console.log("Hello " + name + ", welcome to JavaScript functions!");
}
welcomeUser("Alice"); // output: Hello Alice, welcome to JavaScript functions!

// 3) Function with Return Value   
function calculateSum(a, b) {
    return a + b;
}
let result = calculateSum(5, 3);
console.log("Sum:", result); // output: Sum: 8

// 4) Function Expression :  function ko variable me store karna
const multiply = function(x, y) {
    return x * y;
}
let product = multiply(4, 6);
console.log("Product:", product); // output: Product: 24

// 5) arrow Function :  ek concise syntax provide karta hai function likhne ke liye 
const divide = (x, y) => {
    return x / y;
} 
let quotient = divide(20, 4);
console.log("Quotient:", quotient); // output: Quotient: 5 

// 6) Immediately Invoked Function Expression (IIFE) :  function ko turant hi invoke kar deta hai jese hi wo define hota hai
(function() {
    console.log("This is an IIFE!");
})();                                             // output: This is an IIFE! 

// 7) Function with Default Parameters
function greetUser(name = "Guest") {
    console.log("Hello " + name + ", welcome!");
}
greetUser();               // output: Hello Guest, welcome!
greetUser("Bob");  // output: Hello Bob, welcome!

// 8) function argument and parameters difference
function dance (style){
    console.log("I like to dance " + style);
}
dance("Hip Hop");                // "Hip Hop" is the argument passed to the function
// "style" is the parameter that receives the argument

// 9) Default Parameters 
function add (x=0, y=0){
    return x + y;
}
console.log(add(5, 10)); // output: 15
console.log(add(7));     // output: 7 (y takes default value 0)
console.log(add());      // output: 0 (both x and y take default value 0)

// 10) Rest Parameters :  function me variable number of arguments ko handle karne ke liye use hota hai
function abcd (...numbers){
    console.log(numbers);
}
abcd(1, 2, 3, 4, 5);                                 // output: [1, 2, 3, 4, 5]

// 11) Recursive Function :  function jo khud ko call karta hai
function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    } else {
        return n * factorial (n - 1);
    }
}
console.log(factorial(5)); // output: 120 (5 * 4 * 3 * 2 * 1 = 120) 

// 12) Return and early return in function
function efgh (num){
    return num * 2;          // function yaha se return ho jayega aur niche ka code execute nahi hoga
}
console.log(efgh(4)); // output: 8

// 13) early return 
function checkEvenOdd (num){
    if (num % 2 === 0) return "Even";
    return "Odd";
}
console.log(checkEvenOdd(7)); // output: Odd

