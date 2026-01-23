// loop are of 3 type : for , while , do while
// 1. for loop: 
// kaha se jana hai -> kha tak jana hai -> kaise jana hai
// start                 end                change 
// for(start ; end ; change){
//      // code
// }

for(let i = 1; i <= 5; i++){
    console.log(i);   // 1 2 3 4 5
}
// Output: 1 2 3 4 5

// 2. while loop : 
// start                 end                change
// kaha se jana hai -> kab rukna hai ->  kaise jana hai 
// start 
// while(end){
//      // code
//      change
// }

i = 1;
while(i <= 5){
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5

// 3. do while loop :iska ye profit hai ki ek iteration to chalega hi chahe condition false ho.
// do{
//      // code
//      change
// } while(end);

 i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
// Output: 1 2 3 4 5

// break statement : loop ko turant rokne ke liye use hota hai.
for(let j = 1; j <= 10; j++){
    if(j === 6){
        break;  // loop stops when j is 6
    }   
    console.log(j);  // 1 2 3 4 5
}


// continue statement : current iteration ko skip karke next iteration pe chala jata hai.
for(let k = 1; k <= 8; k++){
    if(k === 6){
        continue;  // skip when k is 6
    }           
    console.log(k);  // 1 2 3 4 5 7 8 
}
