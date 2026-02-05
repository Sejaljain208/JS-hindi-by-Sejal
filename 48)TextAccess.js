/* text modify karne ke liye , hum phle tag ko select karege phir with help of dot operator use karege : 1) innearHTML
                      2) innearText
                      3) textContent

Text / Content Access
Used to read or update text or HTML content.

for example:---
element.innerText
element.textContent
element.innerHTML                      

jab bh hum , html mai kuch likh te hai , to vo usse tag ke object like innerhtml , inneartext, innearContent mai chala jata hai . 
But use textContent as it is used more in new modern technology and inneartext is old version , and innearHTML use for changing html of tag or applying tag to another tag.
 */                      

// by textContent
let h1 = document.querySelector("h1");
h1.textContent = "hello Sejal";                         // output on screen

//by innearHtml
h1.innerHTML = "<i>hello Sejal</i>";                 // output will be italic