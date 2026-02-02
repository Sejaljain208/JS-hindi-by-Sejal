// find (): array mai value find karne ke liye

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]

let v = arr.find(function(val) {    // val mai har value line by line jayegi
    return val > 25;
});

console.log("First element greater than 25 is:", v); // output: 30