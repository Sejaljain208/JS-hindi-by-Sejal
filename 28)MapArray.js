// map (): ye tab use hoga jab aapko ek naya array banana hai , pichle rray ke basis par .

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]

let newarr = arr.map(function(val){
    return val * 2;
});

console.log("New Array:", newarr); // output: [20, 40, 60, 80, 100]