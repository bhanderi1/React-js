/*

Maths Object
The JavaScript Math object allows you to perform mathematical tasks on numbers.

Example:-
Math.PI;	
The Math object is static.
All methods and properties can be used without creating a Math object first.
Math Properties(Constants):-
The syntax for any Math property is : Math.property
JavaScript provides 8 mathematical constants that can be accessed as Math properties. 

*/
/*

Example:-

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.LOG2     // returns base 2 logarithm of E
Math.LOG10    // returns base 10 logarithm of E
Math Methods
The syntax for Math any methods is : Math.method(number)

*/


//------------------------------Math.E---------------------------------
let math1 = Math.E
console.log(math1);//2.718281828459045

//------------------------------math.PI---------------------------------
let math2 = Math.PI
console.log(math2)//3.14

//----------------------math.round()--------------------------
//Math.round(x) returns the nearest integer.
{
    //1.
    let math3 = Math.round(10.4)
    console.log(math3)//11
}
{
    //2.
    let math3 = 18.9 + 20.9
    let math4 = Math.round(math3)
    console.log(math4)//40
}
{
    //3.
    let round1 = Math.round(12.50);
    console.log("Number after rounding : " + round1);//11
}

//------------------------------Math.ceil()---------------------------------
//Math.ceil(x) returns the value of x rounded up to its nearest integer.
{
    //1.
    let math4 = Math.ceil(10.1)
    console.log(math4);//11
}
{
    //2.
    console.log(Math.ceil(7.8 + 9.7));//18
}
{
    //.3.
    console.log(Math.ceil(-2.56));//-2
}


//------------------------------Math.floor()---------------------------------
//Math.floor(x) returns the value of x rounded down to its nearest integer.
{
    //1.
    let math5 = Math.floor(10.9)
    console.log(math5);//-11
}
{
    //2.
    console.log("Result : " + Math.floor(0.89));//0
}
{
    //3.
    console.log("Result : " + Math.floor(-89.02));//-90
}

//------------------------------Math.trunc()---------------------------------
//Math.trunc(x) returns the integer part of x.
{
    //1.
    let math6 = Math.trunc(-152)
    console.log(math6);//152
}
{
    //2.
    Math.trunc("-1.123"); // -1
}
{
    //3.
    let number2 = Math.trunc(18.645);
    console.log(number2);//18
}

//------------------------------Math.sign()---------------------------------
//Math.sign(x) returns  if x is negative, null or positive.
{
    //1.
    let math7 = Math.sign(129059)
    console.log(math7);//1
}
{
    //2.
    console.log(Math.sign('-3')); //-1
}
{
    //3.
    console.log(Math.sign(0));//0
}

//------------------------------Math.pow()---------------------------------
//Math.pow(x, y) returns the value of x to the power of y.

{
    //1.
    let math8 = Math.pow(3, 3)
    console.log(math8);//27
}
{
    //2.
    let math8 = Math.pow(2,4)
    console.log(math8);//27   ->2*2*2*2
}
{
    //3.
    // let math8 =Math.pow(3 , 5)
    // alert(math8)
}


//------------------------------Math.sqrt()---------------------------------------
//Math.sqrt(x) returns the square root of x.
{
    //1.
    let math9 = Math.sqrt(1024)
    console.log(math9);//32
}
{
    //2.
    let c = Math.sqrt(9);
    console.log(c)//3
}
{
    //3.
    let c = Math.sqrt(225);
    console.log(c) //
}

//------------------------------Math.abs()---------------------------------------
//Math.abs(x) returns the absolute (positive) value of x.
{
    //1.
    let math10 = Math.abs(20);
    console.log(math10);//20
}
{
    //2.
    let math10 = Math.abs(-2500)
    console.log(math10)//2500
}
{
    //3.
    let math10 = Math.abs(0)
    console.log(math10)//0
}


//------------------------------Math.min() and Math.max()---------------------------------------
//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
{
    //1.
    let math11 = Math.min(-10, -25, -90, 45, 2);
    let math12 = Math.max(12, -65 ,1000, -11, 6);
    console.log(math11);
    console.log(math12);
}

//------------------------------Math.random()---------------------------------------
//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).
{
    let math13 = Math.random()
    console.log("rendom", math13);
}


//------------------------------Math.sin()---------------------------------------
//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//	Angle in radians = Angle in degrees x PI / 180.
{
    //1.
    let math14 = Math.sin(30 * 3.14 / 180)
    console.log(math14);
}
{
    let math14 = Math.sin(150* 3.14 /180)
    console.log(math14)
}



//------------------------------Math.cos()---------------------------------------
//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//	Angle in radians = Angle in degrees x PI / 180.
{
    //1.
    let math15 = Math.cos(60 * 3.14 / 180);
    console.log(math15);
}

//------------------------------Math.log()---------------------------------------

//Math.log(x) returns the natural logarithm of x.
//The natural logarithm returns the time needed to reach a certain level of growth.
{
    //1.
let math16 = Math.log2(15.27)
console.log(math16);
}

//------------------------------Math.log2()---------------------------------------

//------------------------------Math.log10()---------------------------------------