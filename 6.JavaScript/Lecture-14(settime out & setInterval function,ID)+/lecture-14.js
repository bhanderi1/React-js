/* javascript Asyncronous Method */

/* settimeout method */

/* SetTimeOut(function, delay ,parameter1, parameter2 ,..... 
)*/

/* setTimeout(
    function()
   {
    
   },delaytime
    
 */


//   function print(){
//     console.log(
//         "Hello Javascript"
//     );
//  }
//  setTimeout(print , 5000); 

//  let print = () =>
//  {
//     console.log("setTimeout method")
//  }
//  setTimeout(print , 5000)




// setTimeout(
//    function greet()
//    {
//       console.log("hello javascript");
//    },5000
// )

// settimeout(
//    () => console.log('hello world'),5000
// )

// function greet(name ,age)
// {
//    console.log(`your name is ${name} and age ${age}`);
// }
// setTimeout(greet , 1000 , "srushti" ,52)




/*SetInterval */

// setInterval(function , dealy ,Parameter1 ,parameter2, ........)

// setInterval(
//    function greet()
//    {
//       console.log("1");
//    } , 5000
// )

// setInterval(
//    () => console.log("hello"),2000;
// )

// function greet(name,age)
// {
//    console.log(`your name is ${name} and age ${age}`)
// }

// setInterval(greet ,1000 ,"srushti",52)


/*SetInterval Id */

// function greet(name ,age)
// {
//    console.log(`your name is ${name}  and age ${age}`)
// }
// let Id = setInterval(greet,1000,"ram", 23 )

// // clearTimeout
// clearInterval(Id)

// ----task----
// {
//    let datetime = new Date().toLocaleDateString()

//    function time(date)
//    {
//       console.log(`current Time  ${date}`)
//    }
//    time(datetime)
//    setInterval("date" , 3000)
// }



// ---------------------------task------------------------------
// current time Print every 3 seconds

// function time()
// {
//    const date = new DateTime()
//    console.log(date.toLocaleDateString())
// }
// let date = setInterval(time , 3000)

// function currenttime()
// {
//    clearInterval(date)
// }


// function currenttime()
// {
//    let datetime = new Date()
//    let time = datetime.toLocaleTimeString();
//    console.log(time)

//    setTimeout(currenttime,3000);
// } 

// currenttime()
// setInterval(currenttime,3000)