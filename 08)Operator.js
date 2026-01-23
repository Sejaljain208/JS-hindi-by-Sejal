// operator : operator is special symbol which is used to perform operations on operands
// operand : operand is a value on which operator perform operations

// types of operators in javascript:
// 1. Arithmetic operator
// 2. Assignment operator
// 3. Comparison operator   
// 4. Logical operator
// 5. unary operator
// 6. Ternary operator
// 7. Typeof operator  (refer to 09-Typeof.js file)

// 1. Arithmetic operator = ( + , - , * , / , % , **)
console.log(2+5);   // 7
console.log(5-2);   // 3
console.log(2*5);   // 10
console.log(10/2);  // 5
console.log(10%3);  // 1  (remainder)
console.log(2**3);  // 2^3 = 2*2*2 = 8

// 2. Assignment operator = ( = , += , -= , *= , /= , %= , **= )
let a = 10;                 // assign 10 to a
a += 5;                     // a = a + 5  => 15
a -= 3;                     // a = a - 3  => 12
a *= 2;                     // a = a * 2  => 24
a /= 4;                     // a = a / 4  => 6
a %= 4;                     // a = a % 4  => 2
a **= 3;                    // a = a ** 3  => 8
console.log(a);             // 8

// 3. Comparison operator = ( == , === , != , !== , > , < , >= , <= )
console.log(5 == '5');              // true  (value comparison)
console.log(5 === '5');             // false (value + type comparison)
console.log(5 != '5');              // false
console.log(5 !== '5');             // true
console.log(5 > 3);                 // true
console.log(5 < 3);                 // false
console.log(5 >= 5);                // true
console.log(3 <= 5);                // true

// 4. Logical operator = ( && , || , ! )
console.log(true && false);                          // false
console.log(true || false);                          // true
console.log(!true);                                  // false

// 5. Unary operator = (
//  ++               use for increment , 
// --                use for decrement , 
// !                 use for logical NOT , 
// +                 it convert the string to number , 
// -                 it convert the string to number and negates it  , 
// typeof            used to know the data type of variable , 
// delete            used to delete the property of object )  

let b = "5" ;
console.log(typeof b);  // string
console.log(+b);        // 5  (unary plus converts string to number)
console.log(-b);        // -5 (unary minus converts string to number and negates it)
console.log(++b);       // 6 (pre-increment)  (b = 5 , then ++b makes it 6 , print 6 )
console.log(b++);       // 6 (post-increment) (b = 6 , then b++ makes it 7 , print 6 )
console.log(--b);       // 6 (pre-decrement)  (b =7 , then --b makes it 6 , print 6)
console.log(b--);       // 6 (post-decrement) (b =6 , then b-- makes it 5 , print 6)
console.log(b);         // 5
console.log(+"harsh");  // NaN (not a number)

// Note: typeof operator is covered in 04-Typeof.js file
// 6. Ternary operator = ( condition ? expr1 : expr2 )
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);   // Yes, can vote    

 // 7.ternary operator =  ( condition ? istrue : isfalse )
    let marks = 85;
    let grade = (marks > 50 ) ? "Pass" : "Fail";
    console.log(grade);   // Pass

