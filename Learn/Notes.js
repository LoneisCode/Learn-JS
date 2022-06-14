/*
//Thus a comment will suffuice
// 4basic data type
typeof "dave"; // tells what it is
typeof true;  // boolean
let myVar;
typeof myVar ;//undefined
//string
//number
myVar = "dave";
let myNum = 88;
console.log(myNum +myVar) ;
// === checks type and content of varible 
console.log(myVar === "dave");
// == only checks content so below ius correct but the next is false
console.log(myNum == 88);
console.log(myNum === "88");
// !== not operator  rest are the same from java

 alert("hey wodaeeeeeee");
 //Strings
 const myVarible = "Mathematics";
 //length
 console.log(myVarible);
 //charAt
 myVarible.charAt(0);
 //indexOf
 myVarible.indexOf("ma"); //returns 0
 myVarible.lastIndexOf("at"); //returns last index  of phrase at
 myVarible.slice(0,4); //returns start and ends
 myVarible.split("e"); //splits and does include e
 // there are several more.
// In js all nubmer types fall under same umbrella
const myfloat = 42.01;
const myInt = 42; 
// 0 is false 

//Numbers\\
 
Number.isInteger(3); //checks if is integer.
Number.parseFloat(myfloat); // parses a float if cannot gives NaN
myfloat.toString();


//MATH methods

Math.PI// returns PI
Math.trunc(myfloat); //removes all decimals
Math.round(myfloat); //rounds
Math.ceil(myfloat); //rounds up
Math.floor(myfloat); //rounds down as expected.
Math.pow(4,2); //4 to power of 2;
Math.min(3,2,4,.8,.78,7.990,7.991); //finds min of list of numbers.
Math.max(3,4,5,9); //finds max
Math.random() ;//finds random from 0 to 1 not including one.

Math.floor(Math.random()* 10) + 1 // 1-10 including 10


//Codin challenge\\

let myName = "Kniledge" ;
console.log(myName.charAt(Math.floor(Math.random() * myName.length) ));

 //Ifs\\
 let banned =false;
 let soup = "chicken noodle"; //if this was undeclared it would return false.
 if(banned){
    reply = "no soup for you";
 }else if(soup){
    reply = `Heres your ${soup}`;
  }else{
    reply =' Sorry were out of soup.';
  }
  console.log(reply);

  let score = 89;
  let grade;
  if(score >= 90){
    grade = "A";
  }else if(score >= 80){
    grade = "B";
  }else if(score >= 70){
    grade = "C";
  }else if(score >= 60){
    grade = "D";
  }else{
    grade ="F";
  }
  //water fall
*/
//Switch Statement
