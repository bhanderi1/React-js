/* Javascript Array */
{
  let newarry = [1 , false ,"string"]
  console.log(newarry)
  console.log(newarry.length)         //3
  
  let newarry2 = ["apple" , "banana" , "watermelon" , , "lichi"]
  console.log(newarry2)
  console.log(newarry2[4])            //lichi
  console.log(Object.keys(newarry2))  //[0,1,2,4]
  console.log(newarry2.length)        //5
  
  newarry2.length = 10
  console.log(newarry2)
  console.log(Object.keys(newarry2))  //[0,1,2,4]
  
  newarry2[0] = "Graps"
  console.log(newarry2)
  
  let newstring = newarry2.toString()
  console.log(newstring)
  console.log(typeof(newstring))
}

// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to Strings

/*
Array indexes start with 0:

[0] is the first array element
[1] is the second 
[2] is the third ...
*/

/* Array length properties */

// let arry = [
//   "option-1",
//   "option-2",
//   "option-3",
//   "option-4",
//   "option-5",
//   "option-6",
//   "option-7",
// ];

// console.log(arry);
// console.log(arry[0]);
// console.log(arry[5]);
// arry.push("javascript");
// console.log(arry);
// arry.pop();
// arry.pop();
// arry.pop();
// console.log(arry);

// arry[0] = "1";
// console.log(arry);




/* join() */

{
  let array = ["1", "2", "3", "4", "5"];
  let array2 = array.join("+");
  console.log(array2); //1+2+3+4+5
  console.log(typeof array2); //srting
}
{
  let array = ["s","r","u","s","t","i"]
  let array2 = array.join("_")
  console.log(array2)
}
{
  let array =["sru","1902"]
  let array2 =array.join("_")
  console.log(array2)
}




/* ----------------------popping  ->delete in last ----------------         */

{
  //1.
  const dish = ["panipuri", "aloopuri", "dosa", "machuriyan"];
  document.getElementById("demo").innerHTML = dish;   //panipuri,aloopuri,dosa,machuriyan
  document.getElementById("demo-1").innerHTML = dish.pop();//manchutiyan
  document.getElementById("demo-2").innerHTML = dish.pop();//dosa
  console.log(dish);//panipuri,aloopuri
  console.log(dish.length);//2
}
{
  //2.
    const num = ["1", "2", "3", "4"];
    document.getElementById("demo").innerHTML = num;   
    document.getElementById("demo-1").innerHTML = num.pop();
    document.getElementById("demo-2").innerHTML = num.pop();
    console.log(num);//1,2
    console.log(num.length);//2
}
// pop() 
// ->using id
{
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // document.getElementById("demo").innerHTML = fruits; 
  // document.getElementById("demo-1").innerHTML = fruits.pop();//mango
  // document.getElementById("demo-2").innerHTML = fruits.pop();//apple
  // document.getElementById("demo-3").innerHTML = fruits.pop();//orange

  // console.log(fruits);//banana
}



// ---------------pushing array   ->add in last-------------------
{
  const dish =["panipuri", "aloopuri", "dosa", "machuriyan"];

  document.getElementById("demo").innerHTML = dish;//panipuri,aloopuri,dosa,manchuriyan
  dish.push("pizza");
  document.getElementById("demo-1").innerHTML = dish;//panipuri,aloopuri,dosa,manchuriyan,pizza
  console.log(dish);
}
{
  //2.
    const num = ["1", "2", "3", "4"];
    document.getElementById("demo").innerHTML = num; 
    num.push("5");
    document.getElementById("demo-1").innerHTML = num;
    num.push(6);
    console.log(num);//1,2,3,4,5,6
    console.log(num.length);//6
}
// using by id  --> pushing
{
  // const dish =["panipuri", "aloopuri", "dosa", "machuriyan"];
  // document.getElementById("demo").innerHTML = dish.push("icecrem")
  // document.getElementById("demo-1").innerHTML = dish.length //5
}


/* ---------------------------Shifting Elements ------------------------*/
/* The Shift() method remove the first array element and "shifts" all other element to a lower index*/

{
  let arry = ["S", "R" ,"U" ,"S","H", "T" ,"I"]
  let arry2 =arry.shift()
  let arry3 =arry.shift()
  console.log(arry2)//S
  console.log(arry3)//R
  console.log(arry)//U,S,H,T,I
}

//----------------------------- shift out------------------------------------
// /The shift method returns the value that was "shifed out"/

{
  const name = ["S", "R" ,"U" ,"S","H", "T" ,"I"]
  console.log(name)
  document.getElementById("demo").innerHTML = name.shift()//S
  document.getElementById("demo-1").innerHTML = name//R,U,S,H,T,I
}

//-------------------------------- unshift() -->new element adds --------------
/* The unshift() method add a new elementnto an array (at the begning), and "unshifts" older elements*/

{
  // let arry = ["option-1" , "dosa" , "water" ,"game","10"]
  // arry.unshift("hyy")
  // console.log(arry)//'hyy', 'option-1', 'dosa', 'water', 'game', '10'
}

//using by id
{
  // const dish = ["panipuri", "dosa" ,"pizza","water","bread"]
  // document.getElementById("demo".innerHTML = dish.unshift("chocholet"))
  // document.getElementById("demo-1").innerHTML=dish
}

//------------------------------ changing elements-----------------------
{
  const arry = ["s" ,"r" , "u","s","h","t","i"]
  console.log(arry)
  arry[10]="a"
  console.log(arry)
}

// add element
{
  // const array=["x","y","z","a","b","c"]
  // document.getElementById("demo").innerHTML=array //x,y,z,a,b,c
  // array[array.length]="8"
  // document.getElementById("demo-1").innerHTML=array//x,y,z,a,b,c,8
}
//;1100010101111



//------------------------ merging(concatenating) arrys------------------------
{

  let array1 = ["1","2","3","4","5","6","7"]
  let array2 = ["8","9","10","11","12","13"]
  let array3 = ["14","15","16","17","18","19"]
  let array4 = array1.concat(array2 ,array3)
  console.log(array4)
}
{
  let arry =["how"]
  let arry1 =["are"]
  let arry2 =["you?"]
  let arry4 = arry.concat(arry1,arry2)
  console.log(arry4)
}
{
  let array = ["hello"]
  let array1 = ["world"]
  let array2=array.concat(array1)
  console.log(array2)
}


/************************************************************************************************** */

/*splicing and slicing array */
//javascript array splice()

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

{
  const months = ["jan","feb","march","april","june","july"]
  console.log(months)
  let months2 = months.splice(3,3,"aug","sap")
  console.log(months2)  //april,june,july
  console.log(months) //april,june,july,aug,sap
}
{
  const num =["1","2","3","4","5","6"]
  let num1 =num.splice(2,4,"7","8")
  console.log(num1)//3,4,5,6
}
{
  const alfabet = ['a','b','c','d']
  let alfabet1 = alfabet.splice(2,3,"e",'f')
  console.log(alfabet1)
}
// --------------------------javascript array slice----------------------------

// slice()
// slice(start)
// slice(start, end)

{
  let array1 = [80,90,75,60,545,3]
  console.log(array1)         
  let array2 =array1.slice(0,4)
  console.log(array1)
  console.log(array2)        //80,90,75,60
}
{
  let array1 = [1,2,3,4,5,6]
  console.log(array1)         
  let array2 =array1.slice(2,5)
  console.log(array1)
  console.log(array2)        //3,4,5
}

//-------------------------------------- Array.isArray-------------------------
{
  console.log(Array.isArray(17)) //false
}


//--------------------------------------sorting array----------------------------
{
  let arry1 = ["java","c","c++","html","css"]
  console.log(arry1)
  let arry2 = arry1.sort()
  console.log(arry2)  //c,c++,css,html,java
}
{
  let arry1 = [52,101,825,12,1,5,10,89]
  console.log(arry1)
  let arry2 = arry1.sort()
  console.log(arry2)  //1, 10, 101, 12, 5, 52, 825, 89
}


//--------------------------------- reversing array----------------------------
{
  let array1 = ["java","c","c++","html","css"]
  console.log(array1)
  let array2=array1.reverse()
  console.log(array2)//css,html,c++,c,java
}
{
  let array1 = [1,2,3,4,5,6,7,8,9,10]
  console.log(array1)
  let array2=array1.reverse()
  console.log(array2)//10,9,8,7,6,5,4,3,2,1
}

//---------------------------------- number sort-------------------------------

{
  let array1 =[189 , 45 , 56 , 128  , 10 , 150 ]
  console.log(array1)
  let numbersorted =array1.sort((a , b) => a-b)
  console.log(numbersorted)// [10, 45, 56, 128, 150, 189]
}

/*  ------------------------------javascript array map()----------------------- */

{
  const number1 = [56 , 798 , 345  ,35]
  console.log(number1)
  const number2 = number1.map(myFunction)
  const number3 = number2.sort((a,b)=>a-b)
  console.log(number2)  // [70, 112, 690, 1596]

  function myFunction(value){
    return value * 2
  }
}
{
   let maparry = [20 , 56, 2 , 101 , 50];
   let maparry2 = maparry.map((item) => item*2);
   console.log(maparry);
   console.log(maparry2);
}

/*---------------------------------  javascript Array flatMap()---------------- */
{
  let flatmap=[1,2,3,4]
  let flatmap1 = flatmap.flatMap((num)=>num === 3 ? [1,1]:2)
  console.log(flatmap1)  //2,2,1,1,2
}

{
  let flatmap=[5,2,9,6,7,8,]
  let flatmap1 = flatmap.flatMap((num)=>num === 3 ? [1,1]:2)
  console.log(flatmap1)  //2,2,1,1,2
}

/* Javascript Array flat() */
{
  let flatarray = [10, 20, [22, 33, [44, 55, [66, 77]]]]
  let flatmap2 = flatarray.flat(3)
  console.log(flatmap2);// [10, 20, 22, 33, 44, 55, 66, 77]
}
{
  let flatarray = ["a", "b", ["c", "d", ["e","f", ["g", "h"]]]]
  let flatmap2 = flatarray.flat(3)
  console.log(flatmap2);// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
}


/*------------------------------- javascript array filter() ------------------*/

{
  let filterarry = ["tennis", "baseball", "cricket", "khokho", "vollyball", "chess"]
  let filterarry2 = filterarry.filter((word) => word.length < 10)
  console.log(filterarry2);

  let filterarry3 = filterarry2.sort()
  console.log(filterarry3);
}

// -----------------------------javascript array fill method---------------------
{
  let fillarray = [46,89,101,122,45]
  console.log(fillarray)
  let fillarray2 = fillarray.fill("none",1)
  console.log(fillarray2)// [46, 'none', 'none', 'none', 'none']
}

/*----------------------javascript array copywithin() method------------------- */

// copyWithin(target, start)
// copyWithin(target, start, end)
{
  const abc = ["A","B",'C',"D","E","F"]
  console.log(abc)
  const newcopy = abc.copyWithin(1,3)
  console.log(newcopy)// ['A', 'D', 'E', 'F', 'E', 'F']
}

{
  const num = [1,2,3,4,5,6,7,8,9]
  const newcopy = num.copyWithin(1,4)
  console.log(newcopy);//[1, 5, 6, 7, 8, 9, 7, 8, 9]
}

/*----------------------------javascript valueof() method--------------------- */

{
  let array = [1,2,3,4,5,6,7,8,9]
  console.log(array.valueOf())
}

/*-----------------------javascript Multidimensional array ---------------------*/
/* A multidimensional array is an array that contains another array. */

{
  // multidimensional array
   const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
  let data1 =data[1][1]
  console.log(data1)   //3
}

/* Add an Element to a Multidimensional Array */
{
  // Adding Element to the Outer Array

   let studentsData = [['Jack', 24] , ['Sara', 23]];
   studentsData.push(['Peter', 24]);
   let data = studentsData[1][1]

   console.log(studentsData);
   console.log(data);//23
}

//  adding element to the inner array
{
  // using index notation
  //  let studentsData = [['Jack', 24], ['Sara', 23],];
  //  studentsData[1][2] = 'hello';

  //  console.log(studentsData);
}

{
  // // using push()
  let studentsData = [['Jack', 24], ['Sara', 23]];
  studentsData[1].push('hello');

  console.log(studentsData);
}

{
  // the Array's splice() method to add an element at a specified index.0+
  let studentsData = [['Jack', 24], ['Sara', 23]];

  // adding element at 1 index
  studentsData.splice(0, 2, ["peter", 58]);
  console.log(studentsData);
}

/*  Remove an Element from a Multidimensional Array */
{
  // remove the array element from outer array
  let studentsData = [['Jack', 24], ['Sara', 23]];
  studentsData.pop();

  console.log(studentsData);
}

{
  // remove the element from the inner array
  let studentsData = [['Jack', 24], ['Sara', 23]];
  studentsData[1].pop();

  console.log(studentsData); // [["Jack", 24], ["Sara"]]
}
{
  //  // the splice() method to remove an element at a specified index.
  let studentsData = [['Jack', 24], ['Sara', 23]];

  // removing 1 index array item
  studentsData.splice(0, 1);
  console.log(studentsData);
}