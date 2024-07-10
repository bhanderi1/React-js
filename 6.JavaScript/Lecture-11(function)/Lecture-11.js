/*  JavaScript Function and Function Expressions */

/*
A function is a block of code that performs a specific task.
A function is declared using the function keyword.
The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addNumbers.
*/
{
    function print()
    {
        console.log("Hello Function")
        console.log(2*2)//4
    }
}
{
    function print()
    {
        console.log(5*6+9)
    }
}
/* Function Parameters */

// A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.
{
    function multiply(a,b){
    console.log(a)
    return a*b
    }
    console.log(multiply(10 , 10))       //100
}

/* Function Return */

// The return statement can be used to return the value to a function call.
// The return statement denotes that the function has ended. Any code after return is not executed.
// If nothing is returned, the function returns an undefined value.


/*   Benefits of Using a Function   */

// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.

{
    function add(a , b)
    {
        return a+b
    }

    console.log(add(40,56))
    console.log(add(48,56))
    console.log(add(39,16))
    console.log(add(20,96))
    console.log(add(5,46))
}

/* 4. Function Expressions */
{
     // program to find the square of a number
    // function is declared inside the variable
    let x=function(num){return num*num}
    console.log(x(10))//100

    // can be used as variable value for other variables
    let y=x(3)
    console.log(y)

    // variable x is used to store the function. Here the function is treated as an expression. And the function is called using the variable name.
    // The function above is called an anonymous function.
}

/* JavaScript Arrow Function / Multiline Arrow Functions */

// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

/* Arrow Function With Arguments */

function print()
{
    return console.log("hello Function")
}
print()

let x=() => console.log("hello function of array")
x()
let y=()=>console.log(2*2)
y()

// Arrow Function as an Expression
{
    let gender  ="female"
    let x=(gender =="male")?() => console.log("you are male") : () => console.log("you are female")
    x()
}

// javascript callbake function
{
    // passing function as an argument
    greet('srushti',callme)
    // callback function
    function callme(){
        console.log('I am first callback function')
    }

    // function syntext
    function greet(name,callback)
    {
        console.log('hi'+''+name)
        callback()
    } 
}