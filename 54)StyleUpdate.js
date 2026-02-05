// Style Update : uppdate or modify CSS with help of javascript 
/*
Style Updates can be done by two ways :-
                                
1)Direct Style : hum direct jo bhi style karna chahte hai , vo direct likh de
                 element.style.color = "red";
                 element.style.backgroundColor = "yellow";

2)Using ClassList : hum html file mai ,<style> tag mai,class banate hai or usko add , remove ya toogle karte hai .
        i) add : humne tag mai classname add kar diya through js .
                 element.classList.add("className");
        ii)remove : jo class lagi hu thi , usko hata diya through js.
                 element.classList.remove("className");
       iii) toggle : ye agar class lagi ho to hata deta hai , 
                 or hati ho to laga deta hai .          
                 element.classList.toggle("className")
 */

// direct style for tag <h1>
let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor="black";
h1.style.fontSize="70px";

// using Classlist (add , remove , toggle ) adding class hulu to <h2> tag
let h2 = document.querySelector("h2");
h2.classList.add("hulu");                //added hulu class
h2.classList.toggle("hulu");             // remove class hulu

