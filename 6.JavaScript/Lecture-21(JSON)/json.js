let obj1=[
    {"name" : "Ashiti" ,"Id":1, "Marks":"30"},
    {"name" : "jasmi" ,"Id":2, "Marks":"34"},
    {"name" : "srushti" ,"Id":3, "Marks":"38"},
    {"name" : "vishva" ,"Id":4, "Marks":"39"},
    {"name" : "ram" ,"Id":5, "Marks":"40"},
    {"name" : "shyam" ,"Id":6, "Marks":"32"},
    {"name" : "kartik" ,"Id":7, "Marks":"35"},
    {"name" : "het" ,"Id":8, "Marks":"50"},
    {"name" : "vansh" ,"Id":9, "Marks":"56"},
    {"name" : "prince" ,"Id":10, "Marks":"40"},
    {"name" : "kiran" ,"Id":11, "Marks":"48"},
    {"name" : "khanak" ,"Id":12, "Marks":"50"},

]
console.log(obj1);

let obj=
{
    "name":"srushti",
    "age":21,
    "friend":"Jasmi"
}
console.log(obj);

//------------------Lecture practice-------------------------

/* JavaScript JSON data */

/* Mutable Data */
let Data ={name : "jhon" ,age:50, hobby:"cricket"}
console.log(Data);

let JsonData = {"name" : "john","age":50 , "hobby":"cricket"}
console.log(JsonData);


let User  = [
    {
      "Name" :  "John"
    },
    {
      "Age" : 45
    },
    {
      "Hobby" : {
        "hobby1" : "Baseball",
        "hobby2" : "Superball",
        "hobby3" :"Cricket",
        "hobby4" : "Travelling"
      }
    },
    {
      "Topic" : ["Javascript" , "SQL" , "ReactJs" , "Html" , "Css"]
    }
]


console.log(User);
console.log(User[0].Name);
console.log(User[1].Age);
console.log(User[2].Hobby);
console.log(User[2].Hobby.hobby1);
console.log(User[2].Hobby.hobby2);
console.log(User[2].Hobby.hobby3);
console.log(User[2].Hobby.hobby4);
console.log(User[3].Topic);
console.log(User[3].Topic[0]);
console.log(User[3].Topic[1]);
console.log(User[3].Topic[2]);
console.log(User[3].Topic[3]);

// json.purse method
let object = [ {"name":"jhon" ,"age":50 , "hobby":"cricket"}]
let jsonobject =JSON.stringify(object)
console.log(jsonobject);
console.log(typeof(jsonobject));


let JsonObject ='{"name":"Jhon" , "age" : 45 , "hobby" : "Cricket"}';
console.log(object);

let object1 = JSON.parse(jsonobject)
console.log(object1);
console.log(typeof(jsonobject));
console.log(typeof(object1));


fetch('http://localhost:3000/comments')
.then(Response =>Response.json())
.then(json => console.log(json))



