// some() : ye ek boolean value return karta hai. Agar koi bhi element array me condition ko satisfy karta hai to true return karta hai, nahi to false return karta hai.

let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr); // output: [10, 20, 30, 40, 50]

 let newarr = arr.some((val)=>{
    return val > 35;      
});
console.log("New Array:", newarr);  // output: true  (kyunki 40 aur 50 dono hi 35 se bade hain)

// dryRun :-
// val = 10 => 10 > 35 ? false
// val = 20 => 20 > 35 ? false
// val = 30 => 30 > 35 ? false
// val = 40 => 40 > 35 ? true  (yahi pe function true return kar dega aur loop ruk jayega)  