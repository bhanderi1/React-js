  // Converting Variable to Numbers

{
  let n1 =  Number(true);          //1
  let n2 =  Number(false);         //0
  let n3 =  Number("10");	        //10
  let n4 =  Number("  10");	      //10
  let n5=  Number("10  ");         //10
  let n6 =  Number(" 10  ");       //10
  let n7 =  Number("10.33");	      //10.33
  let n8 =  Number("10,33");	      //NAN
  let n9 =  Number("10 33");	      //NAN
  let n10 =  Number("John");	      //NAN
  console.log(n8);
}
{
      let pi1 = parseInt("-10");      //-10
     let pi2 =  parseInt("-10.33");   //-10
     let pi3 =  parseInt("10");       //10
     let pi4 =  parseInt("10.33");    //10
     let pi5 =  parseInt("20 30");	   //20
     let pi6 =  parseInt("10 years"); //10
     let pi7 =  parseInt("years 10"); //NAN
     console.log(pi7);
}

{       
    let pf1 =  parseFloat("10");		         //10
    let pf2 =  parseFloat("10.33");	         //10.33
    let pf3 =  parseFloat("10 20 30");       //	10
    let pf4 =  parseFloat("10 years");       //10	
    let pf5 =  parseFloat("years 10");       //NAN
    console.log(pf5);	
 }