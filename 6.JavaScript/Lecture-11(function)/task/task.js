// 1. write a function that returns the square of a number 1 to 20 
// function square(i)
// {
//   return i*i
// }
// for(i=1; i<=20; i++)
// {
//     console.log(square(i))
// }


//2.write a function to covert celsius to fahrenheit
// function fahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32
// }
// console.log("celsius to fehrenhit =",fahrenheit(180)) //356

// 3. write a function to find the area of a given rectangle

// function rectangle(l, b) {
//   return l * b
// }
// console.log("rectangle = ",rectangle(9, 5)) //45

//4.write a function to reverse a number
// function reverse(j) {
//   return j
// }
// console.log("reverse number:-")
// for (j = 10; j >= 1; j--) {
//   console.log(j)
// }

// //5. count the number of vowels in the string

// {
//   function num(string){
//       let Vowels = 'aAeEiIoOuU';
//       let count = 0;

//       for(let i = 0; i < string.length; i++){
//           if (Vowels.indexOf(string[i]) !== -1){
//               count += 1;
//           }
//       }
//       return count;
//   }
//   console.log("The Total Number Of Vowels is", num("osrushtio"));
// }



// 6. write a function to calculate simple interest based on principal amount

// function interest(p , r , n)
// {
//   return p*r*n/100
// }
// console.log("simpale interest amount = ",interest(10,12,15))//18

//7. write a function to generete a random number

// function rendomNumber(){
//   let num = Math.random()
//   console.log(num)
// }
// rendomNumber()

//8.write a javascript program to display the current day and time in the following format.


// function date_time()
// {
//   let days = ["monday", "tuseday","wensday","thrseday","friday","satareday","sunday"]
//   let date =new Date()
//   console.log(date)
//   let day = days[date.getDay()]
//   console.log(day)
//   let time = date.getHours()
//   console.log(time)
//   let minite = date.getMinutes()
//   console.log(minite)
// }
// date_time()

//9.write a javascript function that returns a passed string with letters in alphabetical order.


// function alphabetical(string)
// {
//   return string.split('').sort().join('')
// }
// console.log("srushti=",alphabetical("srushti"))


//10. write a javacript codinional statement to find the sign of the product of three numbers. display an alert box  with the specified sing.

// let a,b,c;

// a=10,b=12,c=89

// if(a>0 && b>0 && c>0 )
// {
//   alert("this is sing +")
// }
// else{
//   alert("this is sing -")
// }




// test javascript

-8

var a="SkillQode -decode your skill"
var result =a.substring(12 , 20)
document.write(result)

console.log(NaN === NaN)  //false

console.log(typeof(NaN))  //number

let b = [1,2,3,4,5]
console.log(b.slice(2,4))//il

var a="hello"
var sum = 0
for(var i=0; i<a.length; i++)
{
sum+=(a.charCodeAt(i) - 'a'.charCodeAt(0))
}
console.log(sum)//47


const example = ({a,b,c})=>
{
  console.log(b*2 ,a*5,c*2)
}
example({a:0,b:1,c:2})   //2 0 4
 


// console.log(ans)

// const obj1 = {Name:"hello",age:16}
// const obj2 = {Name:"hello",age:16}
// console.log(obj1 === obj2)  //false


const obj1 = {first:20, second:30,first:50}
console.log(obj1)  //50 ,30

let c=1
if(c!=null)
console.log(1)
else
consloe.log(0) //1

