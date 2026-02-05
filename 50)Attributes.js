/* attributes hum change karege of html file through js (this) file. it can be done three ways : 
              1) setattributes (always put image address)
              2)getAttributes
              3)removeAttributes

Attribute Manipulation
Manage attributes like id, class, src, href, etc.

for example :----
element.getAttribute("name");
element.setAttribute("name", "value");
element.removeAttribute("name");
 */

// by setAttribute 
// [select-tag.setattibutes("jisko set karna hai " , "kya set karna hai")]
let a = document.querySelector("a");
a.setAttribute("href","https://www.google.com");     

let img = document.querySelector("img");
img.setAttribute(                                      //unsplash.com se link li
    "src",
    "https://plus.unsplash.com/premium_photo-1709142797607-d27ea6a56b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJva2VuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
); 

//by getAttribute
console.log(img.getAttribute("src"));    //src ka url nikal dega console par

//by removeattribute
img.removeAttribute("src");              // remove image from screen

