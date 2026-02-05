// Selecting query means hame vo element select karna hai hai . iske char methods 
// Selecting element : to perform any operation , we need to select first .it can be 
//                     done by four ways. 
//                       i)getElementById
//                       ii)getElementsByClassName
//                       iii)querySelector
//                       iv)querySelectorAll

// jisme se hame querySeclector and querySelectorAll use karege .getElementById or getElementsByClassName phle use hta hai .

//these all can be seen by "open with live server " on index2.html file and then inspect that page and go on console.

//by getElementById
let abcd = document.getElementById("abcd");           //hi is select from html file
console.dir(abcd);

// by getElementByClassName 
//all class with name "heading" is selcted from html file                    
let h2 = document.getElementsByClassName("heading");     //HTMLcollection(array) as O/P
console.dir(h2);

// by querySelector : only select first one .always write '#' before id.
let h1 = document.querySelector("#abcd");              //by id 
console.dir(h1);                             
let h = document.querySelector("h2");                    // by tag name
console.dir(h);

//by querySelectorAll
let H = document.querySelectorAll("h1");
console.dir(H);                       // always give array as nodelist on console.
