// foreach () : ye ek loop hai jo array ke har element par ek function ko apply karta hai. Iska use tab hota hai jab hume array ke har element par kuch operations perform karne hote hain bina naya array return kiye.

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]

arr.forEach(function(val) {
    console.log(val); // output: 10, 20, 30, 40, 50
}); 

