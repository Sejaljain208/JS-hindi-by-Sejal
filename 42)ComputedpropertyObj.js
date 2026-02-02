// Computed Property Names in JavaScript : Eska use hum dynamic property names create karne ke liye karte hai. Yani ki agar hume kisi variable ke value ko property name banana hai to hum computed property names ka use karte hai.

let obj = {
    name: "satya",
    age: 24,
    address :{
        city: "indore",
        state: "MP",
    },
    [role] : "developer" 
};
console.log("Original Object:", obj);

console.log(obj[role]); // output: developer
// Yaha pe role variable ka value "role" hai to obj ke andar ek property create hogi jiska name "role" hoga aur uski value "developer" hogi.

