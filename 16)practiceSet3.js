// function question 

// question 1 : write a  function to calculate the BMI calculater  value 
function BMI (weight , height ){
    return weight/(height*height);
}
console.log(BMI(69,1.7));                    //output : 23.87543252359515
console.log(BMI(69,1.7).toFixed(2));                    //output : 23.88

//question 2 :create a reusable discount calculator using HOF 
function discountcalculator(discount){
        return function(price){
            return price - (price *(discount/100)) ;
        }
}
let discount = discountcalculator(10);           //10% discount 
console.log(discount(200));                     //180

// question 3 : create a counter using closure
function counter(){
    let count = 0;
    return function (){
        count++;
        return count ;
    };
}
let c = counter();
console.log(c());                    //output : 1
console.log(c());                    // output : 2
console.log(c());                   // output : 3

let d = counter();
console.log(d());                    //output : 1


// question 4 : use IIFE  to isolate variable
(function () {
    const password = "secret password";
    console.log(password);                       //secret password
}) ();

console.log(password);         //error , ye bahar call nhi hota 
