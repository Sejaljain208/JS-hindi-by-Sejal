// slice (a ,b ) : a = starting index, b = ending index (not inclusive)
// par ye array ke ek hisse ko naya array banane ke liye use hota hai , jo bhi elements hate , vo dusri array mai aa kar print hoge.

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]

let slicedArr1 = arr.slice(1, 4);
console.log("Sliced Array slice(1,4):", slicedArr1); // output: [20, 30, 40]
// extracts elements from index 1 to index 4 (not inclusive of index 4)