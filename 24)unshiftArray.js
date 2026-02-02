// unshift : array elment ka aage addition karta hai

let arr = [30, 40, 50];
console.log("Original Array:", arr); // output: [30, 40, 50]

arr.unshift(10);
console.log("Array after unshift(10):", arr); // output: [10, 30, 40, 50]

arr.unshift(20);
console.log("Array after unshift(20):", arr); // output: [20, 10, 30, 40, 50]