// every() : ye ek boolean value return karta hai. Agar har element array me condition ko satisfy karta hai to true return karta hai, nahi to false return karta hai.

// ye some ka opposite hai, jahan some() true return karta hai agar kam se kam ek element condition ko satisfy karta hai, wahin every() tabhi true return karta hai jab sabhi elements condition ko satisfy karte hain.

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]    

let allGreaterThan5 = arr.every(function(element) {
    return element > 5;
});
console.log("Are all elements greater than 5?", allGreaterThan5); // output: true

let allGreaterThan25 = arr.every(function(element) {
    return element > 25;
});
console.log("Are all elements greater than 25?", allGreaterThan25); // output: false