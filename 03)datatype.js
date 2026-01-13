//data type : data ka type

//-------------------------------------------------------------------------------------
// two types of data type

// 1. primitive data type:aaise sari value jinko copy karne par real copy mil jaye . for example: number, string, boolean, undefined, null, symbol, bigInt. let write code for primitive data type

let a = 10;
let b = a;            //b me a ki value copy ho gayi that means b is primitive data type.
a = a + 2;
b++;
console.log(a); //12
console.log(b); //11

//  but agar aap a mai changes karoge to b mai koi farak nahi padega.or agar aap b mai changes karoge to a mai koi farak nahi padega.

/* Data types in javascript:
i) string : 
that is in single quotes, double quotes or backticks.
"sejal " - double quotes
'sejal' - single quotes
`sejal` - backticks                 

ii) number :  
that is in number form. 
eg: 10, -5, 3.14

iii) boolean : 
that is true or false.
let a = true;
let b = false;

iv) undefined :  
that is a variable which is declared but not assigned any value.bydeafault its value is undefined.
eg: let student;

v) null : 
that is a variable which is assigned intentionally null value.
e.g: let selectstudents = null; 

vi) symbol : 
that is a unique  immutable (non changeable value) identifier.
future mai hum koi librarires use karege abb is case main un libraries mai kuch fields hoti hai jinse similar hum bhi bna dete hai or galti se humari value overwrite ho jati hai is problem ko solve karne ke liye hum symbol use karte hai. 
eg: let sym1 = Symbol("id");

vii) bigInt : that is used to represent large integers.
*/

// examples of primitive data types :
let name1 = `sejal`; //string
console.log(typeof name1); //string
console.log("name1: ", name1); //sejal

const discount = 15.5; //number
console.log(typeof discount); //number
console.log("discount: ", discount); //15.5

let isLoggedIn = true; //boolean
console.log(typeof isLoggedIn); //boolean
console.log("isLoggedIn: ", isLoggedIn); //true

let student; //undefined
console.log(typeof student); //undefined
console.log("student: ", student); //undefined

let selectedStudent = null; //null
console.log(typeof selectedStudent); //object
console.log("selectedStudent: ", selectedStudent); //null

let sym1 = Symbol("id"); //symbol
console.log(typeof sym1); //symbol
console.log("sym1: ", sym1); //Symbol(id)

//symbol ka use karne ka example :
let obj = {
        name: "sejal",
        age: 20,
        uid: 12,
        email: "sejal@google.com",
}; //object
let u1 = Symbol("uid");
// let u1 ;
obj[u1] = "1";                  //adding symbol property to object

//agar symbol bali line ka use na karo problem ye hoti ki humari object ke andar jo uid property hai wo overwrite ho jati hai isliye hum symbol ka use karte hai taki dono alag alag rahe.

// isme do uid bani hai . ek object ke andar jo humne property banayi hai or ek symbol uid jo humne alag se banaya hai dono alag alag hai isliye dono exist kar sakte hai.
console.log(obj.uid); //12
console.log(obj[u1]); //1        


//bigint :
let s = Number.MAX_SAFE_INTEGER;
console.log("MAX_SAFE_INTEGER: ", s); //9007199254740991

//this is last safe value in javascript . iska matlab ye hai ki isse aage ki value ko javascript accurately represent nahi kar sakta hai.iske liye hum bigInt ka use karte hai. or bigInt ke liye hum n ka use karte hai.

let Num = 340123456567890890n; //bigInt
console.log(typeof Num); //bigint
console.log("Num: ", Num);                 // 340123456567890890n
Num = Num + 3n;
// in case of addition with bigInt both ,values should be bigInt
console.log("Num after addition: ", Num);  //340123456567890893n


// --------------------------------------------------------------------------------

// 2. non-primitive data type: aise sari value jinko copy karne par real copy na mile balki uska reference mile. for example: object, array, function . array [], object {}, function functionName(){}.

/*
i) array :  
that is a collection of data which is in square brackets [].
eg: let arr = [1,2,3,4,5];

ii) object : 
that is a collection of data which is in curly braces {}.
eg: let obj = {name: "sejal", age: 20};

iii) function : 
that is a block of code which is used to perform a specific task.
eg: function greet() {
        console.log("Hello World");
     }
*/

// examples of non-primitive data types :
let arr = [1, 2, 3, 4, 5]; //array
console.log(typeof arr); //object
console.log("arr: ", arr); //[1,2,3,4,5]

let p = {         //object
        name: "sejal",
        age: 20,
        email: "sejal@google.com",
};
console.log(typeof p); //object
console.log("p: ", p); //{name: "sejal", age: 20, email: "sejal@google.com" }

function greet() {      //function
        console.log("Hello World");
}
console.log(typeof greet); //function
greet(); //Hello World

//-------------------------------------------------------------------------------------


// reference type :
// jab hum non-primitive data type ko ek variable se dusre variable me copy karte hai to real copy nahi milti balki uska reference milta hai. iska matlab ye hai ki dono variable same memory location ko point karte hai. agar hum ek variable me changes karte hai to dusre variable me bhi changes reflect hote hai. let write code for reference type.                       

let c = [1, 2, 3];
let d = c; //d me c ka reference copy ho gaya that means d is non-primitive data type.
c.pop();
console.log(c); //[1,2]
d.pop();
console.log(c); //[1]
console.log(d); //[1]
//  but agar aap c mai changes karoge to d mai bhi farak padega.par agar aap d mai changes karoge to c mai koi farak nahi padega.

// same problem in object
let obj1 = {
        name: `amita`,
};
let obj2 = obj1; //obj2 me obj ka reference copy ho gaya that means obj2 is non-primitive data type.
console.log(obj1.name); //amita
obj2.name = `pooja`;
console.log(obj1.name); // pooja
console.log(obj2.name); // pooja


//  but agar aap obj1 mai changes karoge to obj2 mai bhi farak padega.par agar aap obj2 mai changes karoge to obj1 mai koi farak nahi padega.


//-------------------------------------------------------------------------------------

