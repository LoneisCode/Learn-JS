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

//Switch Statement
//check RPS.js

// Conditionals Ternary Ops

// condition ? ifTrue : ifFalse;
let soup ;
let response = soup ? "yes" : "No";
console.log(response);
//we can chain ops
let isBanned = true;
let soupAccess = isBanned? "Cant soup" : soup? `yes we have ${soup}`: "no soup";
console.log(soupAccess);

// can save lines of code.
let score = 89;
let grade = score > 89 ?"A" : score >79 ? "B" : score > 69 ? "C" : score > 59 ? "D" : "F";
console.log(grade);

 
//User Input\\
let myBool = confirm("Returns true or false");
console.log(myBool);

//?? checks if input is null called nullish
let name = prompt("please enter name");
if(name)
{
  console.log(name);
}else{
  console.log("You didnt enter name.");
}

//loops
let myNum = 0;
while(myNum <= 50){
  console.log(myNum);
  myNum++ ;
}
myNum =0;

do{
  myNum += 2;
  console.log(myNum);
}while(myNum < 50)
for(let i=0; i < 10; i++)
{console.log(i)};

let name = "lone"
for( let i = 0; i < name.length; i++){
  console.log(name.charAt(i));
}


let counter = 0;
let myLetter;
while(true){
myLetter = name[counter];
console.log(myLetter)
if(counter === 1){
  counter += 2
  continue;
}
if(myLetter === "e") break;
counter++;
}
console.log(counter);

//Functions 
//Methods = Built-in Functions
function sum(num1,num2){
return num1 + num2 ;
}
console.log(sum(2,6));
const getUserFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserFromEmail("user@email.com"));

const toProperCase = (noun) =>{
  return noun.charAt(0).toUpperCase() + noun.slice(1).toLowerCase();
}

console.log(toProperCase("dAVeGHg"));
*/
//Scope: var, const, let
/*
var x =1 ; //used to be the main aand now is legacy 
var x = 2 ; // doesnt throw error when re-defined
console.log(x);

/* throws error
let y = 6;
let y = 8;
*/
//both allow re-assignment thoe
/*
const v = 2;
// v = 3 ; const doesnt allow for reassignment use this when ever you can. Use let when you have to reassign a variable.
 */
/*
// global scope
var x = 1;
let y =2;
const z =3;
//local scope
{
  let y =4;
}
//local
function myFunc(){
  const z =5
}

// Arrays
const myArray =[];
myArray[0]="dave";
myArray[1]=1001;
myArray[2]=false;
console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);

const lastItem =myArray.pop();
console.log(lastItem);
myArray.unshift(42); //moves 42 to front also returns new length of array.
myArray.push("hey");//moves hey to back of list also returns new length of array.
console.log(myArray);
const firstItem = myArray.shift(); // removes from front 
console.log(myArray); // with moving these elements they will move postions they are not static.

delete myArray[1]; //this not suggested due to the postion still being occupied by undefined / empty.
console.log(myArray);

myArray.splice(1, 0, 42); //start , num of items to delete , replacement value
console.log(myArray);

const array = ["A","B","C", "D", "E" , "F"];
const newArray = array.slice(2,5) ; //returns newArray and does not include end number
console.log(newArray);
//array.reverse(); //reverse array
console.log(array);
const newString = array.join(); //returns string of elements
const new2 = newString.split(","); // returns array and split on delimiter.
console.log(newString);
console.log(new2);
const array2 =["G","H", "I","J","K"];

const array3 = array.concat(array2);
console.log(array3);
const array4 =[...array,...array2]; //spread opp
console.log(array4);
//2D

//same as java look over it though.

//objects
const myObj = {name: "Dave"};
const anotherObj ={
  alive: true,
  ans: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage:{
    morning: "Coffee",
    afternoon: "Tced Tea",
  },
  action: function(){return `time for ${this.beverage.morning} `},
}
//let found = anotherObj.hobbies.find((s)=> {return s === "Eat"})
console.log(anotherObj.action());

const vehicle ={
  wheels: 4,
  engine: function(){
    return "Vroom";
  },

}
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function (){return "whooosh"};
console.log(car);
const telsa = Object.create(car);
telsa.engine = function(){return "bzzzzz"};
console.log(telsa.engine());

const goats ={
  lyrics: "Wayne",
  impact: "2Pac",
  longevity: "Jay Z",
  vocab: "Wu-Tang",
  beats: "Dre",
  comeback: "eninem",
}
console.log(Object.keys(goats));
console.log(Object.values(goats));

for (let keys in goats){
  console.log(`On ${keys}, it's ${goats[keys]}!`);
}
// delete
delete goats.comeback ;
console.log(goats);

//destructing
const {beats : myVar, vocab: myVoc} = goats ;
console.log(myVar);
console.log(myVoc);
//or 
const {beats, vocab} =goats;
console.log(beats);
console.log(vocab);

function sings({vocab}){return `${vocab} aint nun to f with`};
console.log(sings(goats))

//classes 18


class Pizza{
  constructor(pizzaSize){
    this._size = pizzaSize; // _ private indicator
     this._crust = "original";
     //this.type = pizzaType;
     //this.toppings =[];
  }
  getCrust(){return this._crust;}
  setCrust(setCrust){this._crust = setCrust;}
  // can make this more reade by just making thm regular methods.
  //getToppings(){return this.toppings;}
  //setToppings(topping){this.toppings.push(topping);}
  /* bake(){
    console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
  } */

//const myPizza = new Pizza("peperoni", "small");

//myPizza.setToppings("suasage");
//myPizza.setToppings("spinach");
//console.log(myPizza.getToppings());
//myPizza.bake();
//creating child class
/* class SpecialtyPizza extends Pizza{
  constructor(pizzaSize){
    super(pizzaSize);
    this.type ="the works"
  }
  slice(){console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);}

}
const mySpecPizza = new SpecialtyPizza("med");
mySpecPizza.slice(); 

//factory function - this solves private varibles since it is a function the scope of these varibles is only in
// the function and cannot be accesed anywhere else;
function pizzaFactory(pizzaSlice){
  const crust ="og";
  const size = pizzaSlice;
  return{
    bake: () => console.log(`baking a ${size} ${crust} crust pizza.`)
  };
}
const myPizza =pizzaFactory("small");
myPizza.bake();
myPizza.crust = "slim"; // impossible to change
myPizza.bake();


//classes now support public and private - support is limited but expected to grow.
class Pizza{
  crust = "orignal" ; //public
  #sauce ="traditional"; // # - private
  #size;
  constructor(pizzaSize){
    this.#size = pizzaSize;
     //this.type = pizzaType;
     //this.toppings =[];
  }
  getCrust(){return this._crust;}
  setCrust(setCrust){this._crust = setCrust;}
  hereYouGo(){
    console.log(`heres your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
  }
} 
const myPizza2 =new Pizza("large");
myPizza2.hereYouGo();
// console.log(myPizza2.#sauce); gives error: Private field '#sauce' must be declared in an enclosing class
//console.log(myPizza2.sauce); shows undefined
console.log(myPizza2.crust); /// is public so will display
//Check canIuse.com to check support.

//JSON - JavaScript Obj Notation
const myObj ={
  name: "Dave",
  hobbies: ["eat","sleep","code"],
  hello: function(){
    console.log("hello!")
  }
};

console.log(myObj);
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);// doesnt send functions
console.log(typeof sendJSON);//now a string type
const recvJASON = JSON.parse(sendJSON);
console.log(recvJASON);//still no method but a typeof Obj

// JS ERROR HANDLING cause it is too forgiveable
"use strict"; //stuff must be defined
//v = "Dave0"; --> refrence error
//console.log(v);
//Object..create(); -->sytnax error. cant be caught
//type error const name = 0; name= 1;
const makeError = () => {
  try{
    throw new Error("this is custom error!"); //generic error
  }catch(err){
    console.error(err.name); //err.name --> just the name .stack -> full .message -> just message
    console.error(err.message);
    console.error(err.stack);
  }finally{
    console.log("finally");
  }//excutes no matter what

};
function customError(message){
  this.name = "custom error";
  this.message = message;
  this.stack =`${this.name} : ${this.message}`;

}
makeError();
*/
//DOM - document object model.
//in other notes

//Event Listeners
//First  select element
//Syntax: addEventListener(event, function, useCapture)

//Syntax: removeEventlistener(event, function, useCapture)
//event.target what was clicked or acted upon
// EVENT readyStateChange is basically saying is the element ready or completed.
// Event bubbling is when events go up the tree to add the event to other parent elements.
// setting use capture to true flips bubbling to move inward,
// event.stopPropagation() -> stops bubbling 
// preventDefault() stops pages from reloading.

/* //Web Storage API
//Not apart of DOM
// Avaailable to JS via the global variable: Window
//Dont have to type window its implied.
//window.alert("ok");
//alert("ok");
//alert(location);

//window.localStorage -> saves to browser|| window.sessionStorage -> stores data only for session once clossed it is lost
const myObj ={
  name: "dave",
  hobbies: ["eat","sleep", "code"],
  logName: function(){
    console.log(this.name);
  }

};
const myArray = ["eat","sleep", "code"];
localStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(localStorage.getItem("mySessionStore"));
//localStorage.removeItem("")
//localStorage.clear()
//localStorage.key(0);
//localStorage.length;
console.log(mySessionData); //only storee string data such as JSON
//Better to store data as JSON , remember wont keep Func tions.*/

//Modules introduceds in ES6
//Must have server running to use modules simple as live server also type attribute = "module". Auto activates defer auto loading DOM then JS
//Applies strict mode in JS. 

/* import playG from "./guitar.js";
import {shredding as shred, plucking as fingerpicking} from "./guitar.js";  // can rename */

/* console.log(playG());
console.log(shred());
console.log(fingerpicking()); */
//----------------------------
/* import * as Guitar from "./guitar.js";
//console.log(Guitar.playG());// cant do this most use default through this method.
console.log(Guitar.default);
console.log(Guitar.shredding());
console.log(Guitar.plucking());
 */
/* import user from "./users.js";
const me = new user("email@email.com", "Dave");
console.log(me);
console.log(me.greeting()); */

//High Order Function
// A function that does one of the following *Takes one or more functions as arg or returns function as result
// place holder data
/* import {posts} from "./posts.js" ;

//for each
posts.forEach(post => {
  console.log(post);
});


const filteredPosts = posts.filter(post =>{
  return post.userId === 10;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map(post =>{
  return post.id * 10;
});
console.log(mappedPosts);

const reducedPostValue = mappedPosts.reduce((sum, post)=>{
  return sum + post ;
});
console.log(reducedPostValue); */

//Fetch API requires disscussion of Callbacks, Promises, thenables, and async/await.
//Callbacks - functions that pass functions 

/* function firstFunc( parameters, callback){
  //dostuff
  callback();
}
//AKA Callback Hell
firstFunc(para, function(){
  //do stuff
  secondFunction(para, function(){
    thirdFunction(para, function(){

    })
  })
}) */
//Promises
//3 states: Pending, Fulfilled, Rejected -"You go ahead while i finish this up"
/* const myPromise = new Promise((resolve, reject) =>{
  const error =false;
  if(!error){
    resolve("yes! resolved promise");
  }else {
    reject("No! rejected promise");
  }
});

/* console.log(myPromise);//Wont work because it doesnt give useful value only the state of the promise.

myPromise.then(value=>{
  console.log(value + 1);//gives value
})
.then(newValue =>{
  console.log(newValue);
})
.catch(err =>{
  console.error(err);// catches errors if any inside of chain.
})
 
const myNextPromise = new Promise((res, rej)=>{
  setTimeout(function(){
    res("myNextPromise resolve"); // after 3 seconds it will resolve
  }, 3000);
});

myNextPromise.then(value =>{
  console.log(value);
});
myPromise.then(value =>{ //this output first since we set a timer on the promise above. It caught up later to this promise.
  console.log(value);
}); 

const users = fetch("http://jsonplaceholder.typicode.com/users");

//pending
console.log(users); // we attempted to log the value before it was ready.
 const users = fetch("http://jsonplaceholder.typicode.com/users") // returns a promise
  .then(response =>{
    //console.log(response);// not data we can work with coming in as JSON
    return response.json(); // returns a promise
  })
  .then(data=>{ // thenables can get out of hand as well
    console.log(data); // cant take data out side of the block currently, but first (below)
    data.forEach(user => {
      console.log(user);
    });
  });
  console.log(users); // pends a promise because it didnt wait for code above.
  // Small note to self thenables are used to tell code to wait for above statements while promises are telling the script to keep running and code being worked on will catch up later.

// Async/ Await very clean way to  do things above. Async/Await does these in back ground.
// Another example
const myUsers ={
  userList:[]
}

const myCoolFunc = async ()=>{
 const res = await fetch("http://jsonplaceholder.typicode.com/users"); // telling it to wait before what comes next.
 const jsonUserData = await res.json(); // waiting for json data
 //console.log(jsonUserData);
 return jsonUserData; // To use await keyword must be in async function.
}
  //https://www.baeldung.com/cs/async-vs-multi-threading

const anotherFunc = async ()=>{
  const data = await myCoolFunc();
  myUsers.userList = data ;
  console.log(myUsers.userList); 
}
anotherFunc();
//console.log(myUsers.userList); // with this we get a blank array due to another awaiting for cool to complete. JS doesnt wait and immediatley calls console.log().
*/

/* // workflow function
// Below are my own experiments using the .map and foreach functions and capturing json data
const myUsers ={
  userList : [],
  userEmails: []
}
const getUsers = async () =>{
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}
const collectUsers = async () => {
  const users = await getUsers();
    return myUsers.userList = users ;
}
const parseEmails = async ()=>{
  const userData = await collectUsers();
  console.log(userData);
  myUsers.userEmails = userData.map(user=>{
    return user.email ;
  })
  console.log(myUsers.userEmails);
}
parseEmails(); */

/* //Reduction of calls in my own theory
const myUsers ={
  userList : [],
  userEmails: []
}
const getUsers = async () =>{
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  myUsers.userList = data;
  myUsers.userEmails = myUsers.userList.map(user=>{
    return user.email;
  });
  myUsers.userEmails.forEach(email =>{
    console.log(email);
  })
}
getUsers(); */
/* 
//BACK To Dave
const getUsers = async () =>{
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const jsonUserData = await res.json();

  const userEmailArray = jsonUserData.map( user=>{
    return user.email;
  });
  postToWebPage(userEmailArray);
}
const postToWebPage = (data)=>{ //isnt async since it is inside of our async function because we arent await anything either.
  console.log(data);
}
//getUsers();

//2nd parameter of fetch is a object
const getDadJoke = async () =>{
  const res = await fetch("https://icanhazdadjoke.com/", {
    method: "GET", //get requesting
    headers: {
      Accept: "application/json" //we can define what we accept from the api. application/json will give json back with text/plain we git just text of the joke.
      //many other parameeters
    }
  });
  const jokeData = await res.json();
  console.log(jokeData);
}

getDadJoke();

const jokeObj ={
  id:"1j67po6", 
  joke:"Your not just lonely your lonely with your thoughts lol"
}
const postJoke = async (jokePosting) =>{
  const res = await fetch("https://httpbin.org/post",{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokePosting)
  });// When dealing with apis you kmust go read there documentation for what headers and parameters they accept.
  const jokres = await res.json() ;
  console.log(jokres);
}

postJoke(jokeObj); 

const requestJoke = async (firstname,lastname)=>{
  const res = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstname}&lastName=${lastname}&linitTo=[nerdy]`); //some apis require parameters here we can insert directly in url the & chains these parameters and the ? signifes where they start.
  const jsonResponse = await res.json();
  console.log(jsonResponse.value.joke); // can check documentation to see exactly what you want to respond with here its .value.
}
requestJoke("Clint", "Eastwood"); */

//abstract into functions - maybe from form

/* const getDataFromForm = ()=>{
  const reqObj ={
    firstname:"Lone",
    lastname: "johns",
    category: ["nerdy"]
  };
  return reqObj;
}
const buildReqURL =(reqData)=>{
  return `http://api.icndb.com/jokes/random?firstName=${reqData.firstname}&lastName=${reqData.lastname}&linitTo=${reqData.category}`;
}
const requestJoke = async (url)=>{
  const res = await fetch(url); 
  const jsonResponse = await res.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
}
const postJokeToPage = (joke)=>{
  console.log(joke) // here we might post to DOM
}

//Workflow  function - since non of them are linked in any way

const processJokeFunction = async () =>{
  const reqData = getDataFromForm();
  const requrl = buildReqURL(reqData);
  await requestJoke(requrl);
  console.log("job finished");
}

processJokeFunction(); */

//REGEX !!!!!!
// regexr.com