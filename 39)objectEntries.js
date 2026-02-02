// object.entries() method returns an array of key-value pairs for an object

let obj ={
    name : "satya",
    age : 24,
    city : "indore",
    country : "India",
};

let w = Object.keys(obj);
console.log(w); 
// output: [ 'name', 'age', 'city', 'country' ]

let v = Object.entries(obj);
console.log(v); 
// output: [ 
//           [ 'name', 'satya' ],
//           [ 'age', 24 ],
//           [ 'city', 'indore' ],
//           [ 'country', 'India' ] 
//         ]

