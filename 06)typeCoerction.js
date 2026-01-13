// type coercion :
// concept kahta hai ki aapka ka ek tpye automatically convert ho jayegaa.

console.log("5" + 1); //51
// agar dono operands mai se ek bhi string huya  or addition sign huya ,to dusra operand bhi string mai convert ho jaye ga or concatenation ho jayega. 

console.log("5" - 1); //4
// agar subtraction sign huya to dono operands number mai convert ho jayega or subtraction ho jayega.

console.log("5" * "2"); //10
// agar multiplication sign huya to dono operands number mai convert ho jayega or multiplication ho jayega.

console.log("5" / "2"); //2.5
// agar division sign huya to dono operands number mai convert ho jayega or division ho jayega. 

console.log("5" > "2"); //true
// agar comparison operator huya to dono operands number mai convert ho jayega or comparison ho jayega.

console.log("5" == 5); //true
// agar equality operator huya to dono operands number mai convert ho jayega or comparison ho jayega.

console.log("5" === 5); //false
// strict equality operator mai koi type coercion nahi hota hai. dono operands ka type same hona chahiye tabhi true return karega.

console.log(true + 1); //2
// true ka value 1 hota hai. to yaha pe 1 + 1 = 2 hoga.

console.log(false + 1); //1
// false ka value 0 hota hai. to yaha pe 0 + 1 = 1 hoga.

console.log(true + true); //2
// true ka value 1 hota hai. to yaha pe 1 + 1 = 2 hoga.

console.log(false + false); //0
// false ka value 0 hota hai. to yaha pe 0 + 0 = 0 hoga.

console.log(true + false); //1
// true ka value 1 hota hai or false ka value 0 hota hai. to yaha pe 1 + 0 = 1 hoga.