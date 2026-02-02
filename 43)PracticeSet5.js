// question 1 : Create an object for a student with properties name, age, and subjects (an array of subject names).
let student = {
    name: "Satya ",
    age: 24,
    subjects: ["Math", "Science", "History"]
};
console.log("Student Object:", student);

// question 2 : can object keys be a number or boolean ?
let obj = {
    1: "one",
    true: "yes",
    false: "no"
};
console.log("Object with number and boolean keys:", obj);
// Yes, object keys can be numbers or booleans. However, they are converted to strings internally.

// question 3 : access th value of first-name from object 
const person ={
    "first-name" : "satya",
};

console.log("First Name:", person["first-name"]);

// question 4 : given a dynamic key , let key = " age " , how will you access?
let key = "age";

const user ={
    age :22 ,
};
console.log("Accessing dynamic key 'age':", user[key]);

// question 5 : destructure the first name as a variable called firstname 
const member = {
    "first-name": "satya",
    age: 24,
    city: "Delhi"
};
const { "first-name": firstname } = member;
console.log("Firstname:", firstname);                // output: satya

//question 6 : use for-in to log all keys in the object 
const course ={
    title : "JavaScript",
    duration : "3 months",
};
for (let key in course) {
    console.log("Key:", key);
}
// output: title
//         duration 

//question 7 : use object.enteries to print key value pairs
const book = {
    title: "Learn JS",
    author: "Sejal",
};
const entries = Object.entries(book);
console.log("Key-Value Pairs:", entries); 
// output: [ [ 'title', 'Learn JS' ], [ 'author', 'Sejal' ] ]

// question 8 : copy the object using spread operator
const originalObj = {
    a : 1,
    b : 2,
};
const copiedObj = { ...originalObj };
console.log("Copied Object using Spread Operator:", copiedObj); 
// output: { a: 1, b: 2 }

// question 9 : use a variable to dynamically assign a key 
const dynamicKey = "role";
const employee = {
    name: "Satya",
    [dynamicKey]: "Developer"
};
console.log("Employee Object with Dynamic Key:", employee); 
// output: { name: 'Satya', role: 'Developer' }

// question 10 : use optional chaining to access a nested property
const userProfile = {
    username: "satya24",
    details: {
        email: "satya123@example.com",
        phone: "1234567890"
    }
};
console.log("User Profile:", userProfile);
console.log("Email:", userProfile.details?.email); 
// output: satya123@example.com