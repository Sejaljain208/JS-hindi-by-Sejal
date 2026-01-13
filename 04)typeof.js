// typeof quirks (e.g typeof null === 'object')

// we can check data type of variable using typeof operator.but there are some quirks in typeof operator.

let e = true;
console.log(typeof e);       //boolean
console.log(typeof undefined); //undefined

//undefined ka matlab hai ki variable declare to hua hai lekin usme koi value assign nahi hui hai.


console.log(typeof 42); //number
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof {}); //object
console.log(typeof []); //object

//array ka data type bhi object hota hai . ye isliye hota hai kyuki array bhi ek object hi hota hai jisme hum multiple values store kar sakte hai.

console.log(typeof NaN); //number
//NaN ka full form hai Not a Number . ye ek special value hai jo ki number data type ka hota hai. jab hum kisi aise operation karte hai jisme result number nahi hota hai to javascript NaN return karta hai. for example: 0/0 , parseInt("sejal") etc.

console.log(typeof null); //object              
//ye ek bug hai javascript ka . iska matlab ye hai ki null ka data type object hai jo ki galat hai. null ka data type null hona chahiye tha. ye bug purane time ka hai jab javascript banayi gayi thi or abhi tak is bug ko fix nahi kiya gaya hai.

//----------------------------------------------------------------------