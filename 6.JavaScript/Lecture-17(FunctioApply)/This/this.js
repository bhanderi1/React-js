/*Global Use */
/*Length, toString, name */

let max = this;
console.log(max);// window{}

this.name = "skillqode"
console.log(this.name)  //skillqode

/*Inner Function */
function Grow(){
    console.log(this)
}
Grow();   //window{}


/*Constructor Function */
function grow()
{
    this.name = 'javascript'
    console.log(name)
}
//javascript

let NweObj = new grow()
console.log(NweObj)  //grow {name: 'javascript'}

/* this keyword in arrow function */

const newFunc = () => {
    console.log(this)
}
newFunc()//window{}

const obj = () =>
{
    this.name = 'JQuery'
    console.log(name)
}
obj(); //JQuery


/*function.lenght Method */
function greet(){
}
console.log(greet.length)//0


function greets(a,b,c=10){
}
console.log(greets.length) //2

/*function.toString() */
function greet(){
        console.log('skillQode');
}
greet()//skillQode

console.log(() => console.log('data').toString());//() => console.log('data').toString()



/*function.name */
function greet(){
}
console.log(greet.name); //greet

/*this Inside Inner function */
{
    const person ={
        name : 'Jack',
        age: 25,
        greet(){
            console.log(this);
            console.log(this.age);

            const innerFun = () =>{
                console.log(this);
                console.log(this.age);
            }
            innerFun()
        }
    }
    person.greet()
}