// Coping Object in JavaScript : Spread Operator , Object.assign() , deep clone 

// Using Spread Operator
let obj = {
    name: "satya",
    age: 24,
};

let obj2 = { ...obj };                   // copying obj to obj2 using spread operator
console.log("Original Object:", obj);    // output: { name: 'satya', age: 24 }
console.log("Copied Object:", obj2);     // output: { name: 'satya', age: 24 }

// Using Object.assign()
let obj3 = Object.assign({}, obj);      // copying obj to obj3 using Object.assign()
console.log("Copied Object using Object.assign():", obj3); 
// output: { name: 'satya', age: 24 }

// problem with above two methods is that they create a shallow copy that agar obj ke andar koi nested object hoga to wo reference copy hoga na ki real copy. for doing real copy we use deep clone method

// Deep Clone using JSON methods : 
// JSON.stringify() converts a JavaScript object into a JSON string.
// JSON.parse() parses a JSON string and constructs the JavaScript object described by the string.

let nestedObj = {
    name: "satya",
    age: 24,    
    address :{
        city: "indore",
        state: "MP"
    }
};
let deepClonedObj = JSON.parse(JSON.stringify(nestedObj)); 

console.log("Original Nested Object:", nestedObj); 
// output: { name: 'satya', age: 24, address: { city: 'indore', state: 'MP' } }
console.log("Deep Cloned Object:", deepClonedObj); 
// output: { name: 'satya', age: 24, address: { city: 'indore', state: 'MP' } } 

// Modifying deepClonedObj to show that it does not affect nestedObj

deepClonedObj.address.city = "Bhopal";
console.log("After modifying deepClonedObj:");
console.log("Original Nested Object:", nestedObj);
// output: { name: 'satya', age: 24, address: { city: 'indore', state: 'MP' } }
console.log("Deep Cloned Object:", deepClonedObj); 
// output: { name: 'satya', age: 24, address: { city: 'Bhopal', state: 'MP' } } 


// thus deep cloning is successful and changes in deepClonedObj do not affect nestedObj

