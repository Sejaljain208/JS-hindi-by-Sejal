// Destructuring assignment mai hum array ke elements ko alag-alag variables mai assign kar sakte hain.

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]

let [a,b, ,c,d] = arr;

console.log("Destructured Values:");
console.log("a:", a);   // output: 10
console.log("b:", b);   // output: 20
console.log("c:", c);   // output: 40
console.log("d:", d);   // output: 50

// Yahan pe humne array ke first do elements (10, 20) ko variables 'a' aur 'b' mai assign kiya hai,
// teesre element ko skip kar diya hai (iske liye humne comma use kiya hai),
// aur chauthe aur paanchve elements (40, 50) ko variables 'c' aur 'd' mai assign kiya hai. 
