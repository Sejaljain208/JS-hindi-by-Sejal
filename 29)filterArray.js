// filter () : ye ek naya array banata hai jisme wo sare elements hote hain jo diye gaye condition ko satisfy karte hain.

let arr = [10, 15, 20, 25, 30, 35, 40];
console.log("Original Array:", arr); // output: [10, 15, 20, 25, 30, 35, 40]

let filteredArr = arr.filter(function(val){
    return val > 20; // condition: sirf wo elements jo 20 se bade hain
});

console.log("Filtered Array (elements > 20):", filteredArr); 
// output: [25, 30, 35, 40]    