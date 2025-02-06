// Date Object

// => the Date() constructor creates Date objects, when called as a function, it returns a string representing the current time.

// syntax:-
// new Date()

// =>9 Way to create a new Date:-
//1.new Date()
//2.new Date(date string)
//3.new Date(year , month)
//4.new Date(year , month , day)
//5.new Date(year , month , day ,hours)
//6.new Date(year , month , day ,hours , minites)
//7.new Date(year , month , day ,hours , minites , seconds)
//8.new Date(year , month , day ,hours , minites , seconds , ms)
//9.new Date(ms)


// --------------------------------------------------------------
// LIST OF TIMING BASED EVENTS:-
// --------------------------------------------------------------


// 1.setTimeout():- aek particular time ma task completeing .....
// The setTimeout function is use to execute a fuction code block after a specified delay in milliseconds.

// syntax:-
function mycallback(){
    console.log("setTime out function");
}
setTimeout(mycallback , 2000)


//2.setInterval():-every time 5 s run in task it is continue .....
// The setinterval function is used to repeatedly execute a function or code bolck at a specified interval in milliseconds.

// syntax:-
function interval(){
    console.log("setTime Interval function");
}
setInterval(interval , 1000)


//3.clear timeout():-setTime out na function ne rokawa cleartime out no use thay
// =>If you want to cancel a scheduled timeout before it occurs, you can use the clearTimeout funtion.
// =>The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

// syntax:-
// clearTimeout(timeoutID)

function delayfunction(){
    console.log("Clear time out function calling...");
}

const clear = setTimeout(delayfunction , 2000)
clearTimeout(clear)


//4.clearInterval():-
// => If you want to cancel a scheduled interval before it occurs , you can use the clearInterval function.
// => The global clearInterval() method cancels a timeout previously established by calling setInterval().


// syntax:-
// clearInterval(interalID)

function setdelayfunction(){
    console.log("Clear Interval function calling...");
}
const interalID = setInterval(setdelayfunction ,5000)
clearInterval(interalID)







// -----------------------object -------------------------------


// => Objects are a fundamental part of JavaScript, providing a way to group related data and functions together. In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other objects. Objects can have properties and methods, making them versatile for various use cases.

// Syntax - obj = {}

// ------------creating objrcts -----------------
// -> there are severak ways to create objects in javascript, The most common one is using object literals:

const product = {
    id:1,
    pNAme:"Leptop",
};

const person = {
   name:"srushti",
   age:20,
   isStudent:true,
   greet : function(){                // Method
    console.log("welcome....");
   }
};

// -------------Accessing Properties -----------------
// => You can access object properties using dot notation or square bracket notation:
console.log(person.age);
console.log(person["age"]);


//------------ adding and modifying Propeties:------------
// => you can add new properties or modify existing ones:
person.job  = "web dev"
person.age = 19;
console.log(person);


//------------ Methods -------------------
// =>method is object are function associated with the object. they can be invoked using the same noation as properties.

console.log(person.greet());

// We can add bynamic keys in an object:-

let idType = "studentID";

let student = {
    [idType]:"A123456",  // Dynamic key based in idType
    SName : "srushti",
    SAge:20,
    isStudent : true,
    greet:function(){
        console.log(`my ${idType} is ${student[idType]} and my name is ${student.SName}`);
    }
}
student.greet()
// when we want to get the user name and value in react



