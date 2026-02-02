// Spread operator with array : this help to copy elements of one array into another array

let arr1 = [10, 20, 30];
console.log("Original Array 1:", arr1); // output: [10, 20, 30]

// using spread operator to copy elements of arr1 into arr2
let arr2 = [ ...arr1 ];
console.log("Array 2 after copying from Array 1 using spread operator:", arr2); 
// output: [10, 20, 30]

// Modifying arr2 to show that it is a separate copy
arr2.push(40);
console.log("Array 2 after pushing 40:", arr2);   // output: [10, 20, 30, 40]
console.log("Array 1 remains unchanged:", arr1); // output: [10, 20, 30]

// Using spread operator to combine two arrays
let arr3 = [40, 50, 60];
let combinedArr = [ ...arr1, ...arr3 ];
console.log("Combined Array using spread operator:", combinedArr); 
// output: [10, 20, 30, 40, 50, 60]

// Using spread operator to create a shallow copy of an array
let arr4 = [ ...combinedArr ];
console.log("Shallow copy of Combined Array:", arr4); 
// output: [10, 20, 30, 40, 50, 60]   


