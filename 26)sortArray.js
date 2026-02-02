// sort() : ye array ko acsending ya descending order me sort karne ke liye use hota hai. matlab chhote se bade ya bade se chhote order me arrange karne ke liye use hota hai.

// ye hamesha function accept karta hai jisme do parameter hote hai. jese ki a and b. aur ye function return karta hai ek number ko.
// a-b : ascending order ke liye use hota hai.
// b-a : descending order ke liye use hota hai.


let arr = [5, 3, 8, 1, 2];

// Ascending order
let Ascendingarr = arr.sort((a, b) => 
    a - b);
console.log("Ascending order:", Ascendingarr); // output: [1, 2, 3, 5, 8]

// Descending order
let descendingArr = arr.sort((a, b) => 
    b - a);
console.log("Descending order:", descendingArr); // output: [8, 5, 3, 2, 1]