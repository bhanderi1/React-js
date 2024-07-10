/* toString() */
{
  //1.
  let Number1=150
  let Number2 = Number1.toString();
  console.log(Number2);             //150
  console.log(typeof(Number2));     //string
  
  let Number3 = (89+20).toString();
  console.log(Number3);             //109
  
  let Number4 = (150).toString();
  console.log(Number4);             //150
}
{
  //2.
  // let num =50;
  // let num1 = num.toString()
  // alert(num)
  // alert(typeof(num1))
}
{
  //3.
  const number =7
  const string = number + "days in one week"
  console.log(typeof string)
}



/*  toExponential() */
{
  //1.
  let a=2500000
  
  let b=a.toExponential()
  console.log(b)                    //2.5e+6
  let c=a.toExponential(10)
  console.log(c)                    //2.5000000000e+6

}
{
  //2.
  let x = 9.65600000000
  let y= x.toExponential(9)
  console.log(y)
}
{
  //3.
  // let a = 84555512.00000000
  // let b =a.toExponential(15)
  // alert(b)

}


/*  toFixed() */
{
  //1.
  let fix1 = 5.4545
  let fix2 = fix1.toFixed()
  console.log(fix2);               //5
  let fix3  = fix1.toFixed(10)
  console.log(fix3);               //5.4545000000
}
{
  //2
  let a =(145/7)
  let b =a.toFixed(5)
  console.log(b)//20.71429
}
{
  //3.
 let a = 1548652.154
 let b =a.toFixed(15)
 console.log(b)//1548652.154000000096858
}




/* toPrecision()pre */

{
  let pre1 = 5
  console.log(pre1); //5
  let pre2 = pre1.toPrecision(1);
  console.log(pre2); //5
  let pre3 = pre1.toPrecision(2);
  console.log(pre3); //5.0
  let pre4 = pre1.toPrecision(3);
  console.log(pre4); //5.00
  let pre5 = pre1.toPrecision(4);
  console.log(pre5); //5.000
  let pre6 = pre1.toPrecision(5);
  console.log(pre6); //5.0000
  let pre7 = pre1.toPrecision(6);
  console.log(pre7); //5.00000
}





/* ValueOf()  */

{
  //1.
  const numbers = 150;
  let Number1  = numbers.valueOf();
  console.log(Number1);  //150
  //2.
  let Number2  = (15-26).valueOf();
  console.log(Number2);  //-11
  //3.
  let Number3  = (255).valueOf();
  console.log(Number3);  //255
  console.log(typeof(Number3)); //number
  //4.
  let Number4 = (5*4).valueOf()
  console.log(Number4);//20
  //5.
  // let Number5 = (8*9-10).valueOf()
  // alert(Number5)
}