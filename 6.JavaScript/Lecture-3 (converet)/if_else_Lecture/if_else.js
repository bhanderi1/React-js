/* 

if statement
if...else statement
if...else if...else statement

*/

/* if...else statement */

let age = 85;

if(age >= 18){
   console.log("You Are Aligible");
}
else{
   console.log("Not Aligible");
}
console.log("Hello");


// if...else...if statement


{
     var book ='history';
     
     if( book == 'history' ) {
        document.write("<b>History Book</b>");
     }
  
     else if( book == "maths" ) {
        document.write("<b>Maths Book</b>");
     }
  
     else if( book == "economics" ) {
        document.write("<b>Economics Book</b>");
     }
     else {
        document.write("<b>Unknown Book</b>");
     }
 }
 

 /* switch statement */

 {

    let input = "n000000000";

    if (input === "1"){
       document.write("Continues..")
    } else if (input === "y"){
       document.write("Continues..")
    }
    else if (input === "yes"){
       document.write("Continues..")
    }
    else if (input === 0){
       document.write("End..")
    }
    else if (input === "n"){
       document.write("End..")
    }
    else if (input === "no"){
       document.write("End..")
    }
    else{
       document.write("Wrong input")
    }
 }

 /*  === comparison */

{
   // let input = 0;

   // switch(input){
   //    case 1:
   //       document.write("Continue...");
   //       break;
   //    case "y":
   //       document.write("Continue...");
   //       break;
   //    case "yes":
   //       document.write("Continue...");
   //       break;
   //    case 0:
   //       document.write("End...");
   //       break;
   //    case "n":
   //       document.write("End...");
   //       break;
   //    case "no":
   //       document.write("End...");
   //       break;
   //    default:
   //       document.write("Wrong input");
   // }
}