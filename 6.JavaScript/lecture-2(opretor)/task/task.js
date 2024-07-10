
// Arithmetic operators
// 1.
{
    // 1.
    var a=1+2*3
    console.log(a) // 7
    // 2.
    var b=1+"2"*3
    console.log(b) // 7
    // 3.
    var c="1"+"2"*3
    console.log(c)  // 16
}

// 2.
{
    //1.
    var d= 1 + 2 ** 3 / 2 - 1
    console.log(d)  // 4
    // 2.
    var e=9/2*3
    console.log(e)   // 13.5
    // 3.
    var f=9 /(2+3)
    console.log(f)  // 1.8
}

//3.
// var x =1
// {
//     x++
//     alert(x)   //2
// }
// var xx=1
// {
//     alert(++xx)   //2
// }
// var xxx =1
// {
//     alert(xxx++)   //1
// }

// 4.
{
  var g= 1==0.1
  console.log(g)   //true
}
{
    var h= 1===0.1
    console.log(h)  //true
}
{
    var i= "1"==0.1
    console.log(i)   //true
}
{
    var j= "1"=="01"
    console.log(j)   //false
}
{
    var k= "1"==0+1
    console.log(k)  //true
}
{
    var l= "1"==0 +"1"
    console.log(l)    //false
}
{
    var m= "1"==0 *1
    console.log(m)    //false
}
{
    var n= "1"==0 *"1"
    console.log(n)   //false
}

// 5.
{
    var o= true&&false
    console.log(o)
}
{
    var p= true &&false||true
    console.log(p)
}
{
    var q= true &&false||!true
    console.log(q)
}
{
    var r= !(true&&false)
    console.log(p)
}





//6.
//   var string1 ="123"
//   var intvalue =123
//   {
//     alert(`${string1}+${intvalue}`);
//   }

//7 .
// var mark = 10;
// var marks = (mark <35) ? "fail" : "pass";
// console.log(marks);

// 9.
// var height = 126.56;
// var type = (height >=190)? "tall" : "short";
// console.log(type);

// 10.
