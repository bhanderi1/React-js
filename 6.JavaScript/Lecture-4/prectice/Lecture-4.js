/* Break , Continue and Nested Statements */
/*  The break statement is used to terminate the loop immediately when it is encountered. */

{
     for (let counter = 0; counter <= 10; counter++) {
          if (counter == 6) {
               break;
          }
          document.write(counter);
          document.write("<br>");
     }
}
// 0,1,2,3,4,5

{
         for(let counter = 1; counter <= 10 ; counter++){
         if(counter == 5){
              continue;
         }
         if(counter == 6){
              continue;
         }
         document.write(counter);
         document.write("<br>");
         }
    }
// 1,2,3,4,7,8,9,10


{
     link: for(let counter = 1; counter <= 10 ; counter++){

     document.write(counter);
     document.write("<br>");

     for(let counter2 = 1; counter2 < 4; counter2++){

          if(counter == 3){
          break link;
          }
          document.write("Hello");
          document.write("<br>");
     }
     }
}
/*1 
Hello
Hello
Hello
2
Hello
Hello
Hello
3*/


// **************************** Loop *******************************************//

/* javascript while loop */

/*

The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known.

while (condition)  
{  
    code to be executed  
}  

*/

// {
//     let i = 11;
    
//     while(i<=10){
//         document.write("Hello" + "<br>")
//         i++;
//     }
// }