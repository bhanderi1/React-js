console.log("welcome to the lecture");

// define the variable Name
var myAge = 20;
console.log(myAge);

var my_firstName = "John";     //valid
console.log(my_firstName);

var _myfirstName = "John";     //valid
console.log(_myfirstName);

// var 123myAge = 25;          //invalid

var $cityNAme = "new york";    //valid

// var my@Email = "sru@gmail.com" //invalid


// -------------------- section-2 => Data type ---------------------------
// => Data types define the type of values that a variable can hold.
// => data types:- 1.)primitive data type =  string , number , boolean , null, undefine , bigint , symbol
//                 2.)object data types   =  An Object , An Array , A date


// number
var myFavNum = 5
console.log(myFavNum);

// string
var myName = 'srushti'
console.log(myName);

//Boolean
var isRaining = false;
var areYouAwesome = true;
console.log(isRaining);

//undefine
var srushti;
console.log(srushti);

//Null
var badMemories = null
console.log(badMemories);

//Bigint
const bigNumber = 85623456230845189562n;
console.log(bigNumber);

//symbol

//Datattype interviw\ew Questions

//1. what is the difference between null and undefine in javascript? ->null = Imagine an Empty Box , undefine = gift box

//2. What is the purpose of typeof operator in javascript? => typeof

//3. What is the result of 'typeof null' in javascript? // null typeof object

// 4. what are primitive data types in javascript?

// 5.convert a string to a number?
var myFavNum = 5
console.log(typeof +myFavNum); //add + sign
console.log(typeof Number(myFavNum));

// 6.convert a number to a string?
let str = 5;
console.log(typeof String(str));
console.log(typeof (str + "")); // add back + "" in () brecket

// 7.Explain the concept of truthy and falsy values in Javascript, Provude examples? => true , any non-empty string("hello") , any non-zero number(42) , Arrays and objects, even if they're not empty
//        => false , 0 ,null,undefined ,NaN

// 8. To check if a non-empty string is truthy or falsy in javascript , we can directly use if statement.
var name = "srushti";
if (name) {
    console.log("truthy value");
}
else {
    console.log("falsy value");
}




//--------------------------parseInt & parseFloat section --------------------
// => coverting string to numbers , but they have different use cases.

// 1. ParseInt : ParseInt is used to parse a string and convert it to an interger
const mystring = "42";
const myNumber = parseInt(mystring)
console.log(myNumber);
console.log(typeof myNumber);  //42

const mystring1 = "42.5";
const myNumber1 = parseInt(mystring1)
console.log(myNumber1);
console.log(typeof myNumber1)  //42

// 2.ParseFloat:ParseFloat is used to Parse a string and covert it to a floating-point number.
const mystring2 = "42.5";
const myNumber2 = parseFloat(mystring2)
console.log(myNumber2);
console.log(typeof myNumber2)  //42.5

// example
console.log(parseInt("123"));//123

console.log(parseInt("123", 10));//123

console.log(parseInt("   123  "));//123

console.log(parseInt("077"));//77
console.log(parseFloat("077"));//77

console.log(parseInt("1.9"));//1
console.log(parseFloat("1.9"));//1.9

console.log(parseInt("&123"));  //NaN
console.log(parseInt("-123"));  //-123
console.log(parseInt("XYZ"));   //NaN

// 1.What is the purpose of the NaN value in javscript?
console.log(isNaN("sru"));

//2.NaN === NaN, why is it flase?
if (NaN === NaN) {
    console.log("same value");
}
else {
    console.log("not equal")
}//not equal



// -------------------- cConcatenation in javascript ---------------------------

const string = "hello " + "wotld"
console.log(string);

let sum = "sru" - 5;
console.log(sum);  //NaN
let sum1 = "5" - 5;
console.log(sum1);  //0
let sum3 = "5" + 10;
console.log(sum3);  //510


console.log(10 + "20"); //1020
console.log(9 - "5");   //4
console.log("java" + "script");  //Javascript
console.log(" " + " ");
console.log(" " + 0); // 0
console.log("srushti" - "bhanderi"); //NaN
console.log(true + true); //2
console.log(true + false); //1
console.log(false + true);//1
console.log(false - true);//-1





// -------------------- Expressions & operators ---------------------------

// 1.assignment operators

// 1.Addition(+)
// 2.Subtraction(-)
// 3.multipltion(*)
// 4.division(/)
// 5.modulus(%)

var result = "hello" / 2
console.log(result); //NaN

// interview Question
var result = 0.1 + 0.2
console.log(result.toFixed(2)); // 0.30

var result = 55 * "hello"
console.log(result); //NaN

// 2. string operators

// 3. Comparison operators => == , === , != , > , >= ,< , <=
// interview Question
// what is difference between == and === operators in javascript?

// 4.Logical operators => && , || , !

// 5.Ternary operator


// -------------------- Loops ---------------------------

// 1.if..else
var temp = 25;
if (temp >= 30) {
    console.log("Lets go to beach");
}
else if (temp >= 20 && temp < 30) {
    console.log("TV dekhte hai yaar");
}
else {
    console.log("Kambhal oodo ,so jawo");
}


let userAge = 12;
let isCitizen = true;
let isRegistered = false
if (userAge >= 18) {
    if (isCitizen) {
        if (isRegistered) {
            console.log('You are eligible to vote');
        }
        else {
            console.log('You are not eligible due to resgistration status');
        }
    }
    else {
        console.log("You are not eligible due to citizenship status");
    }
}
else {
    console.log('You are not  eligible gto vote(younger)');
}


// switch statement:-
var day = "Friday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Friday":
        console.log("Omg lets have party today");
        break;
    case "Sunday":
        console.log("Lets go to movie");
        break;
    default:
        console.log("No Condition match");
}

var areaOfShapes = "circle"
var a = 5; var b = 10; var r = 5;
var result;

switch (areaOfShapes) {
    case "square":
        console.log(a * a);
        break;
    case "rectangle":
        console.log(a * b);
        break;
    case "circle":
        console.log(3.14 * (r * r));   //78.5
        break;
    default:
        console.log("No shape matches");
}


// while loop : first of condition chaking => no out put
var num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

var num = 1;
while (num <= 10) {
    console.log('5 * ' + num + " = " + (5 * num));
    // console.log(`5 * ${num} = ${5*num}`);
    num++;
}

// let userInput;
// let positiveNumber;
// do{
//     userInput = prompt('enter any positive number')
//     positiveNumber = parseFloat(userInput)
// }
// while(isNaN(positiveNumber) || positiveNumber < 0)
//     console.log("You entered a valid positive number:" , positiveNumber);

// do while loop : enter to do and before chaking to the condition =>at list one output
var num = 11;
do {
    console.log(num);
    num++;
}
while (num <= 15)

// for loop = initializer , condition , iteration
for (var num = 16; num <= 20; num++) {
    console.log(num);
}


// ------------------------------ function ----------------------------------
// function declaration

function greet() {
    console.log("hello world");
}
greet() // function invocation(calling a function)

// function parameter
function total(a, b) {
    return a + b
}
console.log(total(20, 30)) //argument passed

//functiom expressions = anonymous function is a same function
var result = function sum(a, b) {
    console.log(a + b);
}
result(10, 15)

//anonymous function = je function nu name na hoy
var result = function sum(a, b) {
    console.log(a + b);
}
result(10, 15)

//return key word


// -------------------------Ecmascript Timeline----------------------------

// let = value change , but con't variable re-assigne 
// =>

// const = connot redeclare block-scoped variable. =>connot change to the value




//---- template string - Ecamascript 2015 ----
// `${age}` => this is template 

//-------------- defalut perameter------------------
function sumTotal(a, b = 10) {
    return a + b
}
console.log(sumTotal(5));

//--------------Fat arrow function ------------------
// const  name = (perameter) => { } name()

// reverse name
const isReverse = (str) => {
    let reverse = "";
    for (let char = str.length - 1; char >= 0; char--) {
        reverse = reverse + (str[char]);
    }
    return reverse
}
console.log(isReverse("srushti bhanderi"))

// palidrome
const isPalidrone = (str) => {
    let reverse = "";
    for (let char = str.length - 1; char >= 0; char--) {
        reverse = reverse + (str[char]);
    }
    if (str === reverse) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalidrone("level"))


// ------------------------------ Array ------------------------------------
// =>array is object that represents a collection of similar type of elemnets.
// =>array like a object.

// .at() method :-count last index value  ex:- [ -3 ,-2 , -1 ]


// -------creating arrays----------
// 1.using array constructor
// let fruits = new Array('apple' , 'orange' , 'banana')
// console.log(fruits);

// 2.using array literal
// let fruits = ['apple' , 'orange' , 'banana']
// console.log(fruits);

// 3.we can also crate an empty array
let arr = [];
console.log(typeof arr) //object


// modifying elements:
// let fruits = ['apple' , 'orange' , 'banana'];
// fruits[2] = 'mango'
// console.log(fruits);

// --------------Iterating ovre array -----------------------
let fruits = ['apple', 'orange', 'Mango', 'grapes', 'banana'];

// 1.for of loop:- value 
for (let item of fruits) {
    console.log(item);
}

// 2.for in loop:- index number
for (let item in fruits) {
    console.log(item);
}

// 3.forEach method:- index and value both
// value return na kare
fruits.forEach((curEle, index, arr) => {
    console.log(`${curEle} = ${index}`);
})

// 4.Map Method :-create a new array and return value in a array
const myMap = fruits.map((curEle, index, arr) => {
    return `${curEle} = ${index}`;
})
console.log(myMap)


// difference between forEach and map method?

// return value
// =>ForEach :- It doesn't  return a value. The forEach Method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or perfoeming a task for each elements.
// =>Map  :- It returns a new array containing the results of applying a function to each elements in the original array. The original array remains unchanged.

// Chaining:
// =>forEach: It doesn't return a value, so it cannot be directly chained with other array methods.
// =>Map  :-since it returns a new array , you can chain other array methods after using map.

// Use Case:
// =>forEach:- used when you want to iterate over the array elements and perform an action on each elemnets, but you don't need a new array.
// =>Map  :-Used when you want to create a new array based on the tranformation of each element in the original array.




// -----------insert , add , replace and delete  -------------------
// push :- add to last elemnet
// pop :- remove to last elemnet
// unshift :- add to first element
// shift :- remove to first element

// Splice(start , delecount , item1 , item2):-
console.log(fruits.splice(1, 0, "watermelan"))
// console.log(fruits.length , "watermelan")
console.log(fruits)


//----------------- searching in an array -------------------------
// indexOf , lastOfIndex &includes
const numbers1 = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9]

//1. indecOf :-  return the first index   => ans na hoy to -1 return kare beacse flase value
// indexOf(searchElement) 
// indexOf(searchElement , fromIndex) 

console.log(numbers1.indexOf(4));
console.log(numbers1.indexOf(4, 5));//-1 false value


//2. LastIndexcOf :-  return last index  
console.log(numbers1.lastIndexOf(4));//3
console.log(numbers1.lastIndexOf(6, 5));//4 => index count the first and 5 pachi ni valuse egnore kare


// 3.includes:- true and false value return 
// includes(searchElement)
// includes(searchElement , fromIndex)

const results = numbers1.includes(11)
console.log(results); //false


// -------------------Filter array------------------------------------
// search + Filter

const Filter = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9]

//1.find method:-
const find = Filter.find((curEle) => {
    return curEle > 5
})
console.log(result); //6

// 2.findIndex method:-
const FindIndex = Filter.findIndex((curEle) => {
    return curEle > 2
})
console.log(FindIndex); //6

//  using map method
const map = Filter.map((curEle) => curEle * 5)
console.log(map);



// 3.Filter method:-
// filter(callbackFn)
// filter(callbackFn , this Arg)

const Filter1 = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9]
const map1 = Filter1.filter((curEle) => {
    return curEle > 5
})
console.log(map1); //[ 6, 7, 8, 6, 9 ]

// useCase:-remove addtocart 
let value = 6;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let updatedCart = numbers.filter((curEle) => {
    return curEle !== value;
})
console.log(updatedCart)

// Filtering Products by Price
const products = [
    { name: "Leptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Smartwatch", price: 150 }
]
// less than to 500
const filterProducts = products.filter((curEle) => {
    return curEle.price <= 500;
})
console.log(filterProducts);

// unique values
const unique = [1, 2, 3, 9, 4, 5, 6, 7, 8, 9];
let uniqueValues = unique.filter((curEle, index, arr) => {
    return arr.indexOf(curEle) == index;
})
console.log(uniqueValues);//[1, 2, 3, 9, 4,5, 6, 7, 8]
console.log([new Set(numbers)]);//[ Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 } ]
console.log([...new Set(numbers)]);//[1, 2, 3, 4,5, 6, 7, 8 ,9]



// -----------Sort and compare an array -------------
// sorting array:-

const sorTing = ['B', 'A', 'C', 'F']
console.log(sorTing.sort()); //[ 'A', 'B', 'C', 'F' ]

const numberSort = [1, 2, 3, 9, 4, 5, 6, 7, 8, 9];
console.log(numberSort.sort());  //[1, 2, 3, 4, 5,6, 7, 8, 9, 9]


// compare callback function
// const sortedNumbers = numbers.sort((a,b) => a-b)

numberSort.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
})
console.log(numberSort);

// ------------------------------------------
// map(), filter(),reduce()
// =>map creates anew array from calling a function for every array elemenet.
// =>map() does not execute the function for empty elemenets.
// =>map() does not change the original array.

const EachNumber = [1, 2, 3, 4, 5]
let mapNumber = EachNumber.map((curEle) => curEle * curEle)
console.log(mapNumber); //[ 1, 4, 9, 16, 25 ]

// 
const word = ["apple", "banana", "mango"]
console.log(word.map((curEle) => { return curEle.toUpperCase() }));



// Reduce():-
// multiple data hoy and apne value signal value joti hoy tyare reduce method use thay

// Array.reduce(function callback(accumultor , currentValue , index ,array){

// },initialValue;

const price = [500, 100, 150, 470]
const totalPrice = price.reduce((acc, curEle) => {
    return acc + curEle
}, 0)
console.log(totalPrice);



// -------------------------string-----------------------------



//----------------Data modeling------------------------

// => data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures, The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// => object sre excellent for modeling real-world entitites. for instance, you might represent a car , a user or a product as an object with properties like color , brand , username , etc.

let car = {
    brand : "Toyota",
    model : "Camry",
    year : 2022,
    start : function(){
        console.log("Engine started!");
    }
}



// ************************interview qustions*********************************

//=> Explain the difference between passing objects by reference and by value in Javascript. Provide an example to demonstrate each scenario.

// Sol : In Javascript , primitive data types like numbers and string anre passed by value while objects are passed by reference.
// Passing by value:-when passing by value , a copy of the primitive value is creates and passed to the function or assigned to a variable. any changes made to the copy do not ect the affginal value.


let aa=10;
const modifyValue = (x) => (x = 20)
console.log(modifyValue(aa));//20
console.log(aa);//10


// Passing by reference : When passing by reference , a reference to the memory location of the object is passed to the function pr assigned to a variable. Any changes made to the object through this reference will affect the original object.

let obj = {id : 5 , name: "kodyfier"}
let obje1 = obj
obje1.name = "techno"
console.log(obje1);
console.log("orignal" , obj);

// To avoid this behavior and crate a true copy of the object, you can use method like object.assign() or the spread operator(...)

// object.assign() is used to copy properties from one or more source objects to a traget object.

let object = {id : 5 , name: "kodyfier"}
let newobj = Object.assign({} , object)
newobj.name = "techno"
console.log(newobj);



// ---------------Comparision by Reference ----------------------------
//=> banne object in alocate memory same 6e ke nai

// ----------------JSOJ(javascript object Notation) ----------------
// => JSON is a data interchange format derived from Javascript objects. objects can be easily convered to JSON and vice versa.


// used to JSON.strigfy and JSON.parse



// ----------------this object ----------------
// The “this” keyword refers to different objectsdepending on how it is used:


//=>4. In an object method, this refers to the object. => object in ander this key no use karo to ae current object ne refer kare 
//=> 2.Alone, this refers to the global object. => this -ae pan global object 6e 
//=> 1.In a function, this refers to the global object. =>window is global object
//=>3. In a function, in strict mode, this is undefined. => "use Strict" - define the top
//=> In an event, this refers to the element that received the event.
//=> Methods like call(), apply(), and bind() can refer this to any object.




// -------------------------object useful marhod ------- ----------------

const Products = {
    id:1,
    name:"leptop",
    category : "Computers",
    brand : "ExampleBrand",
    price : 9999,
    stock : 50 ,
    description : "This is best leptop",
    Image : "image link will be added during projects"
}

// 1.object.keys():-  Return an array containing the names of all enumerable own properties of an object.
let keys = Object.keys(Products)
console.log(keys);


// 2.object.values() :- Returns an array containing the values of all enumerable own proprties of an object.
let Values = Object.values(Products)
console.log(Values);

// 3.object.entries():- array ma covert kare key-value ne
//  Returns an array containing arrays of key-value pairs foreach enumerable own propery of an object.
let enteries = Object.entries(Products)
console.log(enteries);

// 4.object.hasOwnProperty():- chake kare ke define karel property 6e ke nai?
// Returns a boolean indicating whether the object has the specified property as an own property. 
console.log(Products.hasOwnProperty("name")); // true


// 5.object.assign() := 
//  copies the values of all enumerable own proprties from one or more source objects to atarget object.
const target = {a:1 , b:2}
const source = {b:3 , c:4}
const mergedObject = Object.assign(target,source)
console.log(mergedObject);//true{ a: 1, b: 3, c: 4 }


// 6.object.freeze():- 
// Freezes an object , preventing new properties from being added to it and existing proprties from being modified or deleted.
Object.freeze(Products)
Products.id = "5656"
console.log(Products);


















//call back hell
//promise hell
//what is error expetion handling
//asyce and awit
//javascript is acronocy and a secronace
//promise


// callback function:- A callback is a function passed as an argument to another function    =>A callback function can run after another function has finished