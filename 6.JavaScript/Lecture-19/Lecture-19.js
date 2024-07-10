/*array.every */
/* Array.some */
/* Array.entries */
/* Array.reduse */
/* for each */
/* for in */
/* for of */
/* Array.keys */
/* Html dom events */


/*array.every */
const value1 = (currentValue) => currentValue > 18;
const Numbers1 = [85,56,18,69,2]
console.log(Numbers1.every(value1));//false

/* Array.some */
const value2 = (currentValue) => currentValue > 18;
const Numbers2 = [85,56,18,69,2]
console.log(Numbers2.some(value2));//true

/* Array.entries */
const Array = ["java","c++" ,"Bootstrap" ,"Javascript" ,"nodeJS"]
const values = Array.entries()
console.log(values.next().value);// [0, 'java']
console.log(values.next().value);//[1, 'c++']
console.log(values.next().value);//[2,"Bootstrap"]
console.log(values.next().value);
console.log(values.next().value);

/* Array.reduse */
const Num  = [1,2,3,4,5,]
const init = 0
const vals = Num.reduce((val1 ,val2) => val1 +val2)
console.log(vals);//15

 // with init value
 const val =Num.reduce((val1 ,val2)=>val1*val2 .init)
 console.log(val);//NaN

//  -----------------------------------for of-----------------------
 const NewArray = ["india","Austrlia","canada" , "brazil"]
 const output =NewArray.keys()
//  const output =NewArray
for(const keys of output){
    console.log(keys);
}
// console.log(NewArray);



//  -----------------------------------for Each-----------------------
const NewArray1 = ["india","Austrlia","canada" , "brazil"]
const NewArray2 = [12,5 ,5 ,10]
NewArray.forEach(item => console.log(item +item));
NewArray.forEach(item => console.log(item *item));


/* For in loop */
const object =
{
    FirstName : "bhanderi",
    LastName : "srushti",
    age : 21,
}
const NewArry = ["india","Austrlia","canada" , "brazil"]

for(const values in NewArray){
    console.log(values);
}

const str ="Good Morning ,how are you! you are lazy person"
const str1 =/[A-Z]/g;
const Match =str.match(str1)
console.log(Match);


/*--------------- Spred Oper(...)------------------------- */
const NewArr = ["india","Austrlia","canada" , "brazil"]
const arr = [...NewArr ,"Norway"]
console.log(NewArr)
console.log(arr);;

const regexp = /[a-z]/g;
const str2 = 'test1test2'
const Arry =[...str.matchAll(regexp)]

console.log(Arry);
// console.log(Arry[1]);
// console.log(Arry[2]);
// console.log(Arry[3]);
// console.log(Arry[4]);
// console.log(Arry[5]);
// console.log(Arry[5]);
// console.log(Arry[6]);