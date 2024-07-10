//1:-
// var bar = function foo () {};
// console.log(bar === foo);


// //2:-
// console.log(1 + 2 + '1');  //31
// console.log('1' + 1 + 2);    //112

// //4:-
const f = null;
if(f){
    console.log(1);
}else{
    console.log(2);
}
console.log(typeof(f));   // 1 //object

//3:-
// conole.log("12" > "192"); //true
// console.log("09" > "19");  //false

//5:-
// let x = 100;
// let y = x++;
// let z = ++x;

// let n = (x == y) ? z++ : ++z;
// console.log(n);  //103

//6:-
// var x = 0;
// if(10 > 9 > 8){
//     x += 1;
// }
// console.log(x);//0
