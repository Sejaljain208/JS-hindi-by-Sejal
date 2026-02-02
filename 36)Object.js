// objects : they are like real world records , a collection of properties
// key value pairs

// how to create an object
let students = {
    name : "satya",
    age : 21,
    isenrolled : true,
};
console.log("Student Object:", students);

// accessing object properties
console.log("Name:", students.name);
console.log("Age:", students["age"]);            // alternative way to access property 
console.log("Is Enrolled:", students.isenrolled);              // true

// adding new property to object
students.grade = "A";
console.log("Updated Student Object:", students);               // grade added

// modifying existing property
students.age = 22;
console.log("Modified Age:", students.age);                    // age updated to 22

// keys are always strings even if we don't use quotes or write numbers. 

