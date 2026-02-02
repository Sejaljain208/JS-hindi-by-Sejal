// Optional Chaining in JavaScript : "?"  operator ka use karte hai , jo ki phle ki nested nested prperties mai changes aane par error dene se bachta hai.

let obj = {
    name: "satya",
    age: 24,    
    addresses: {
        city: "indore",
        state: "MP"
    }
};

// Accessing existing nested property
console.log("City:", obj.addresses.city); // output: indore 

//or agar addresses property hi na ho to error aayega ya kisi ne addresses ko address kar diya ho to bhi error aayega to hum optional chaining ka use karenge jo error nhi  deta usski jagah undefined de deta hai.

// Accessing non-existing nested property without optional chaining
// This will throw an error: TypeError: Cannot read property 'zip' of undefined
// console.log("Zip Code:", obj.addresses.zip.code);  

// Accessing non-existing nested property with optional chaining
console.log("Zip Code with optional chaining:", obj.addresses?.zip?.code); 
// output: undefined (no error thrown)
