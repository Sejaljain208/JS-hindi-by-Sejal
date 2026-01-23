// run in console of browser . or else make changes in question 8,remove prompt and add any number to run this code in terminal.

//question 1 : print number 1 to 10 using for loop
for(let i = 1;i<11;i++){
    console.log(i);
}

//question 2 : print number 10 to 1 using while loop
console.log(`10 to 1 number print :-`);
let j=10;
while(j>0){
    console.log(j);
     j--;
}

// question 3 : print even number from 1 to 20 using for loop
console.log(`even number from 1 to 20 --`);
for(let i=1;i<21;i++){
    if(i%2==0){
        console.log(i);
    }
}

//question 4 :print odd number from 1 to 15
console.log(`odd number 1 between 15-`);
for(let i=1;i<16;i++){
    if(!(i%2===0)){
        console.log(i);
    }
}

//question 5 : print multiplication table of 5 using while loop
console.log(`multiplication table of 5-`);
let i = 1;
while(i<11){
    // console.log("5 *",i,"=",5*i);
    console.log(`5 * ${i} = ${5 * i}`);
    i++;
}

//question 6: print the sum of number from 1 to 100 using a loop
console.log(`addition of 1 to 100 number - `);
let sum =0;
for(let i=1;i<101;i++){
    sum = sum + i;
}
console.log(sum);

// question 7:print all number betweeen 1 to 50 that are divisible by 3
console.log(`number divisible by 3 between 1 to 50 - `);
i =1;
while(i<51){
    if(i%3===0){
        console.log(i);
        }
        i++;
}

// question 8:ask the user for a number and print whether each number from to that is even or odd.
console.log(`printing user number id even or odd-`);
let number = prompt("give a number");
for(let i =1;i<=number;i++){
    if(i%2===0){
        console.log(`${i} is even`);       // console par hi chalega
    }
    else{
        console.log(`${i} is odd`);
    }
}

//question 9 : count how many number between 1 to 100 are divisible by both 3 and 5 .
console.log("number divide by both 3 and 5 in 1 to 100 :-")
for(let i =0;i<101;i++){
    if(i%3===0 && i%5===0){
        console.log(i);
    }
}