/*----------- ES6 AKA Ecmascript 2015 --------*/


/*Let const */
var productName = 'Laptop'
//code polute
// var age =18;
// if(age >= 18)
// {
//     var driving =true
// }
// console.log(driving);

/* -------------Function scope-------------- */
function register(){
    var username = 'ram'
    var password = 'secret'
    // console.log(username);
}


/* var / let / const variables */
var product = 'Laptop';
var product = 'Mobile';
console.log(product);

// const product = 'Laptop';
// product = 'Mobile';
// console.log(product);  //const error proved kare


/* ---------------------Hoisting -----------------*/
let name;
console.log(name);
name = 20;           /// this is hoisting

/* window.product */

// var box = "clothes"
// let boxes = "toys"

/* ---------------change const value using object---------------- */

const age = {
    years: 20,
};
age.years = 21;

console.log(age);

/*----------------- Arrow Functions --------------------*/

/* short method */

const addition = (a) => {
     console.log(a+a);
}
addition(10);//20

/*----------------- this keyword ------------------*/
console.log(this);//undefind

const shop = {
    purchase(){
        console.log(this);
    }
}
shop.purchase()
/*function methode:-*/
//  const shop = {
//      purchase: function(){
//          console.log(this);
//      },
//  };

//  shop.purchase();

/* parent context :-*/
// const shop = {
//     purchase: () => {
//         console.log(this);
//     },
// };

// shop.purchase();

/*--------------- Template Literals AKA(Also Known As) backticks ---------------*/

// const firstname = 'srushti'
// const lastname = 'bhanderi'
// console.log(firstname + ' ' + lastname);

// const message = 'hello \n' + 'how are you'
// console.log(message);

// const message1 = `I am fine`
// console.log(message1);

// const name1 ='Rakesh'
// const message= `hello ${name1}`
// console.log(message);

/*----------------------- with javascript expression -----------*/
const name1 = 'Rakesh';
const message = `hello ${5 + 6} `;
console.log(message);

// Enhanced object literals
// computed propery keys
// Method defination shorthand
// Property shorthand

/* Method Definiation Shorthand */

const keyName = "name"

// const product = {
//      buy: function() {
//           console.log("hello");
//      }
// }
// product.buy()

/*--------------------- Property shorthand -------------------------------*/

const accessToken = 'abcd'
const refreshToken = 'hyyyy'

// const user ={
//     accessToken : accessToken ,
//     refreshToken : refreshToken,
// };
// console.log(user);

// const user = {
//     accessToken,
//     refreshToken,
// };
// console.log(user);

/*-------------------  Destructuring --------------------------------------*/

const user ={
    name : 'John Doe',
    age :30,
}

// console.log(user.name);

/*------------------ With Alias------------------------------- */
const { name : firstName, age : numbers } = user;
console.log(firstName);
console.log(numbers);

/* javascript Array */ 
/* Declarative Way */