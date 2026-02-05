/* Dynamic DOM manipulation : 
1)createElement
2)appendChild
3)removeChild 
4)prepend
Create, add, or remove elements dynamically.

for example :--
1)html mai jo element na ho usse create karna is done by createElement.
document.createElement("tag");

2)ek element par extra element lgana ya add karna , appendChild .
parent.appendChild(element);

3)ek element se dusre element ko hatna , removeChild.
parent.removeChild(element);

4)kisi element ko starting mai print karna ho tab prepend or baad mai karna ho tab apppend ka use karte hai
parent.prepend(element);
parent.Append(element);
*/

//by createElement to create h1 tag 
let h1 = document.createElement("h1");             //h1 created
h1.textContent = "aayi ye aayi ye ..";             // h1 ka text 
document.body.append(h1);                          // h1 printed on screen

// by removeChild to remove h1 tag
h1.remove();                                     // h1 element remove 

//selecting <div> by querySelector and changing content and using prepend
let h2 = document.createElement("h2");
h2.textContent = "mai bahar ja ri hu..";
document.querySelector("div").prepend(h2);       //printing h1 text  first on screen 
document.querySelector("div").append(h2);       //printing h1 text last on screen 

