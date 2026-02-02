// shift (): first element removal from an array

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]

arr.shift(); // removes the first element (10)
console.log("Array after shift():", arr); // output: [20, 30, 40, 50]

arr.shift(); // removes the first element (20)
console.log("Array after another shift():", arr); // output: [30, 40, 50]
