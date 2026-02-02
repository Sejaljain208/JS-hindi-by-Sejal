// question 1 : 
// Create an array of fruit and then add "mango at the end and "pineapple" at the start of the array
let fruits = ["apple", "banana", "orange"];
console.log("Original array:", fruits);

fruits.push("mango");
console.log("After adding mango at the end:", fruits);  
fruits.unshift("pineapple");
console.log("After adding pineapple at the start:", fruits);


// question 2 :
//replace banana with "kiwi" in the above array
fruits[2] = "kiwi";
console.log("After replacing banana with kiwi:", fruits);

// question 3 :
// insert " red" and "blue" at index 1 in color array 
let color =[ "green" ,"yellow"];
console.log("Original color array:", color);
color.splice(1,0,"red","blue");
console.log("After inserting red and blue at index 1:", color);

// question 4 :
// exteact only the middle 3 elements from the array
let numbers = [1,2,3,4,5,6,7];
console.log("Original numbers array:", numbers);
let middleElements = numbers.slice(2,5);
console.log("Middle 3 elements:", middleElements);

// question 5 :sort the array albhabetically  and 
let names =["zara" , "arjun" , "mira", "bhavya"];
console.log("Original names array:", names);
names.sort();
console.log("Sorted names array:", names);

// question 6 : sort and reverse the array
let cities = ["delhi", "mumbai", "bangalore", "chennai"];
console.log("Original cities array:", cities);
cities.sort().reverse();
console.log("Sorted and reversed cities array:", cities);

// question 7 : use .map() to square each element in the array
let nums = [1,2,3,4,5];
console.log("Original nums array:", nums);
let squaredNums = nums.map(num => 
    num * num 
);
console.log("Squared nums array:", squaredNums);

// question 8 : use .filter() to filter out even numbers from the array
let mixedNums = [1,2,3,4,5,6,7,8,9,10];
console.log("Original mixedNums array:", mixedNums);
let evenNums = mixedNums.filter(num =>
     num % 2 === 0
    );
console.log("Even numbers array:", evenNums);

// question 9 : use .reduce() to get the sum of all elements in the array
let sumNums = [1,2,3,4,5];
console.log("Original sumNums array:", sumNums);
let totalSum = sumNums.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0
);
console.log("Sum of all elements:", totalSum);  

// question 10 : use forEach to print each element of the array with its index
let animals = ["dog", "cat", "elephant", "tiger"];
console.log("Animals array:" , animals);
animals.forEach((Animals, index) => {
    console.log(`Index ${index}: ${Animals}`);
});

// question 11 : use find to get the first number greater than 4 from the array
let findNums = [1,2,3,4,5,6,7,8,9,10];
console.log("Original findNums array:", findNums);  
let firstGreaterThan4 = findNums.find(num =>
        num > 4 );
console.log("First number greater than 4:", firstGreaterThan4);

//question 12 : use .some () to check if any student has scored than below 35 marks
let studentMarks = [45, 67, 23, 89, 34];
console.log("Student marks array:", studentMarks);
let hasFailedStudent = studentMarks.some(function (val){
    return val < 35;    
});
console.log("Is there any student who scored below 35 marks?:", hasFailedStudent);

// question 13 : use .every() to check if all numbers in the array are positive
let checkNums = [1,2,3,4,5];
console.log("Original checkNums array:", checkNums);    
let allPositive = checkNums.every(function (val){
    return val > 0;    
});
console.log("Are all numbers positive?:", allPositive);

// question 14: distructure the array to get first , second and last elements
let fullname = ["satya ", "singhai" , "jain"];
console.log("Fullname array:", fullname);

let[first, second, last] = fullname;
console.log("First element:", first);              // output: "satya"
console.log("Second element:", second);             // output: "singhai"
console.log("Last element:", last);               // output: "jain"

// question 15 : use spread operator to combine two arrays
let array1 = [1,2,3];
let array2 = [4,5,6];
console.log("Array 1:", array1);
console.log("Array 2:", array2);
let combinedArray = [...array1, ...array2];
console.log("Combined Array:", combinedArray);   // output: [1,2,3,4,5,6] 

