// for in loop object mai use hota hai jab hume object ke sare properties ko iterate karna hota hai.

// Syntax : 
//          for (key in object) {
//              // code to be executed
//          }    

let obj ={
    name : "satya",
    age : 24,
    city : "indore",
    country : "India",
};

for(let key in obj){
    console.log(key + ": " + obj[key]);   // output: name: satya
}   