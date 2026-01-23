// flow control: control the flow of execution of code

// if, else if, else
// if (condition) {
//  ... 
// } 
// else if (condition) {
//  ... 
// } else if (condition) {
//  ...
// } else {
//  ...
// }

let marks = 78;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("Grade F");
}
// Output: Grade B

// similarly, you can have multiple else if conditions to check various ranges or criteria.

// switch case : great for checking one variable against multiple values
// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
//     // code to be executed if expression === value2
//     break;
//   ...
//   default:
//     // code to be executed if expression doesn't match any case
// }

let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Yellow fruit");
        break;
    case "apple":
        console.log("Red fruit");
        break;
    case "orange":
        console.log("Orange fruit");
        break;
    default:
        console.log("Unknown fruit");
}
// Output: Red fruit

// Note: break is important to prevent fall-through behavior in switch cases.if break is omitted, execution will continue to the next case even if a match is found.

