// splice ( a,b) : a = starting index, b = number of elements to remove

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]

arr.splice(2, 2); 
console.log("Array after splice(2,2):", arr); // output: [10, 20, 50]
// removes elements starting from index 2 (inclusive), for a count of 2 elements

arr.splice(1, 0, 25); 
console.log("Array after splice(1,0,25):", arr); // output: [10, 25, 50]
// removes elements starting from index 1 (inclusive), for a count of 0 elements, and inserts 25 at index 1 bacause no elements are removed
