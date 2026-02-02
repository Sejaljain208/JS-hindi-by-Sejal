// reduce(): ye ek array ke har element par ek function apply karta hai aur ek single value return karta hai. Iska use tab hota hai jab hume array ke saare elements ka sum, average, maximum, minimum etc. nikalna ho.

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]    

// Sum nikalne ke liye reduce ka use karte hain 
let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}   , 0);                                                // initial value 0 hai

console.log("Sum of array elements using reduce():", sum); // output: 150

// dryRun :- 
// accumulator = 0, currentValue = 10 => accumulator = 0 + 10 = 10
// accumulator = 10, currentValue = 20 => accumulator = 10 + 20 = 30
// accumulator = 30, currentValue = 30 => accumulator = 30 + 30 = 60
// accumulator = 60, currentValue = 40 => accumulator = 60 + 40 = 100
// accumulator = 100, currentValue = 50 => accumulator = 100 + 50 = 150