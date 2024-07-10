/* javascript object */

// const dataobject = {}
// console.log(dataobject)

// const dataobject1 = {
//   key1: "javascript",
//   key2: "reactjs"
// }

// console.log(dataobject1)

// console.log(dataobject1.key1)
// console.log(dataobject1.key2)


// console.log(dataobject1["key1"])
// console.log(dataobject1["key2"])


// const dataobject3 = {
//   name: "ram",
//   gender: "male",
//   address: "ayodhya",
//   marks: {
//     maths: 99,
//     english: 90
//   }
// }
// console.log(dataobject3.marks.maths)
// console.log(dataobject3["marks"])
// console.log(dataobject3["marks"]["maths"])

// const dataobject4 = {
//   array: [1, 2, 3, 5, 6, [12, 13]],
//   array2: [11, 12, 13, 14, 15, 16]
// }
// console.log(dataobject4.array)
// console.log(dataobject4.array[5][0])


// const Array1 = [
//   {
//     id: 1,
//     item: "apple",
//     catagories: "fruits"
//   },
//   {
//     id: 2,
//     item: "banana",
//     catagories: "fruits"
//   },
//   {
//     id: 3,
//     item: "graps",
//     catagories: "fruits"
//   },
//   {
//     id: 4,
//     item: "mango",
//     catagories: "fruits"
//   },
//   {
//     id: 5,
//     item: "watermelon",
//     catagories: "fruits"
//   }

// ]


// console.log(Array1[0].id);




//-----------------------------------------------------------------------------------------------

// let array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80]
// let array2 = array.filter((word) => word <= 35)
// console.log(array2)
// let array3 = array.filter((word) => word >= 35)
// console.log(array3)
// let array4 = array.filter((word) => word >= 50)
// console.log(array4)



const task = [
  {
    fruits:
    {
      fruit1:
      {
        fruit1: "apple",
      },
      fruit2:
      {
        fruit2: "graps",
      },
      fruit3:
      {
        fruit3: "watermalen",
      },
      fruit4:
      {
        fruit4: "banana",
      },
      fruit5:
      {
        fruit5: "mango",
      }
    },
    fastfood:
    {
      dish1:
      {
        dish1: "panipuri",
      },
      dish2:
      {
        dish2: "manchuriyan",
      },
      dish3:
      {
        dish3: "dosa",
      },
      dish4:
      {
        dish4: "sandwich",
      },
      dish5:
      {
        dish5: "chocolate",
      }
    },
    color:
    {
      color1:
      {
        color1: "red",
      },
      color2:
      {
        color2: "yellow",
      },
      color3:
      {
        color3: "green",
      },
      color4:
      {
        color4: "pink",
      },
      color5:
      {
        color5: "blue",
      }
    },
    language:
    {
      language1:
      {
        language1: "java"
      },
      language2:
      {
        language2: "javascript"
      },
      language3:
      {
        language3: "c++"
      },
      language4:
      {
        language4: "bootstrap"
      },
      language5:
      {
        language5: "c language"
      }
    },
    channel:
    {
      channel1:
      {
        channel1: "starplus",
      },
      channel2:
      {
        channel2: "starGold",
      },
      channel3:
      {
        channel3: "colors",
      },
      channel4:
      {
        channel4: "sonypal",
      },
      channel5:
      {
        channel5: "sonysab",
      },
    }
  }
]

// const user_input = prompt("enter fruits,fastfood,color,language and channel list :-")

// if (user_input == "fruits") {
//   console.log("fruits",task[0]["fruits"])
// }
// else if (user_input == "fastfood") {
//   console.log("fastfood",task[0]["fastfood"])
// }
// else if (user_input == "color") {
//   console.log("color",task[0]["color"])
// }
// else if (user_input == "language") {
//   console.log("language",task[0]["language"])
// }
// else if (user_input == "channel") {
//   console.log("channel",task[0]["channel"])
// }
// else {
//   console.log("please,page referse and enter right value")
// }



//----------------------------------------------------------------------------------------------------------------

// let list = [
//   { name1: "student1", catagories: "90%" },
//   { name2: "student2", catagories: "95%" },
//   { name3: "student3", catagories: "80%" },
//   { name4: "student4", catagories: "75%" },
//   { name5: "student5", catagories: "94%" },

//   { name1: "student1", catagories: "90%" },
//   { name2: "student2", catagories: "95%" },
//   { name3: "student3", catagories: "80%" },
//   { name4: "student4", catagories: "75%" },
//   { name5: "student5", catagories: "94%" }
// ];

// let output = prompt("enter student and marks list :-");
// let output1= list.filter(list1 => list1.catagories == output);
// console.log(output1);

// -------------------------------------------------------------------------------------------------

// document.getElementById("button").addEventListener("Click",function(e){
//   console.log("1");
//   console.log("target = " + e.target.dataset.name);
//   console.log('currentTarget = ' + e.currentTarget.dataset.name);
// },false)

// const input =document.querySelector('input')
// const value =document.getElementById('input_values')
// input.addEventListener('input',displayValue)

// function displayValue(e)
// {
//   input_value.innerHTML = e.target.value
// }

// -----------------------------------------------------------------------------------------------
/* 1.javascript object method*/
//  1. JavaScript Object.assign()

// assign() Syntax

{
  // Object.assign(target, ...sources)
}

// assign() Parameters

// The assign() method takes in:

// target - the target object to which we will copy all the properties of the sources.
// sources - the source object(s) whose properties we want to copy.

{
  const obj1 = { num1: "1", num2: "2" }
  const obj2 = { num1: "3", num2: "4" }
  const obj3 = { num1: "5", num2: "6" }

  const obj4 = Object.assign(obj1, obj1)
  console.log(obj1)
  console.log(obj2)
}

{
  const obj1 = { student: "jasmi", marks: "95" }
  const obj2 = { student: "ashiti", marks: "96" }
  const obj3 = { student: "vishva", marks: "97" }
  const obj4 = Object.assign(obj1, obj2)
  console.log(obj2);
}

// -----------------------------------------------------------------------------------------
/*2. assign() Return value*/

// Javascript Object.assign() to Clone Objects

{
  //create source object
  let obj1 = { num: "1", num2: "2" }
  let obj2 = { num3: "3" }
  let object3 = Object.assign(obj2, obj1)
  let Allobj = obj1 = obj2

  console.log(object3)
  console.log(Allobj)
}
{
  let obj1 = { name: "ram", num2: "laxman" }
  let obj2 = { num3: "sita" }
  let object3 = Object.assign(obj2, obj1)
  let Allobj = obj1 = obj2

  console.log(object3)
  console.log(Allobj)
}
// ---------------------------------------------------------------------------------------
{
  // assign ( to merge objects)
  const obj1 = { num1: "1", num2: "2" }
  const obj2 = { num3: "3", num4: "4" }
  const obj3 = { num5: "5", num6: "6" }

  // Object To Merge In Another Object
  const object4 = Object.assign({}, obj1, obj2, obj3)
  const Array = object4.num1
  console.log(Array)
  console.log(object4);
}


// In the above example, we have used assign() to merge the objects o1, o2, and o3 into a new object o4.

{
  // const o4 = Object.assign({}, o1, o2, o3);
}

// Using the empty object {} as a target object ensures that the properties of the other objects are copied to a new object without modifying any of the source objects.

// As can be seen from the output, properties of later objects overwrite that of earlier ones. For example,

// the b key from o1 is overwritten by its counterpart in o2.
// the c keys from o1 and o2 are overwritten by their counterpart in o3.

//If the source value is a reference to an object, it only copies the reference value.

//  2. Javascript Object.create()

{
  let student = {
    name: "Lisa",
    age: 24,
    marks: 78.9,
    display() {
      console.log("Name:", this.name)
    }
  };

  let std1 = Object.create(student)
  let std2 = Object.assign(std1, student)

  std1.name = "Sheeran"

  console.log(std2)
  console.log(std1)
  std1.display()
  console.log(student)
}
// 3.  JavaScript Object.entries()
{
  const obj = {
    name: "Adam",
    age: 20,
    location: "nepal"
  };

  let Obj1 = Object.entries(obj)
  console.log(Obj1[0])
}
{
  // keys are arranged randomly

  const obj = { 42: "a", 22: "b", 71: "c" }

  console.log(Object.entries(obj))
}
// entries() to Iterate Through Key-Value Pairs
{
  const obj = { name: "john ", age: 27, location: "nepal" };

  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}:${value}`)
  }
}
// 4. JavaScript Object.is()

{
  // The Object.is() method checks if two values are the same.

  let Obj1 = { Num1: "1", Num2: "2" }
  let Obj2 = { Num1: "1", Num2: "2" }

  let Obj3 = Object.is(Obj1, Obj2)

  console.log(Obj3);//false

}

{
  // Javascript Object.is()

  // // objects with same values
  console.log(Object.is("JavaScript", "JavaScript")); //true

  // // objects with different values
  console.log(Object.is("JavaScript", "javascript")); ///false

  // // compare null values
  console.log(Object.is(null, null)); //true
}

{
  // is() With Custom Objects

  // create an object
  let obj1 = { a: 1 };

  // // create another object
  // // with identical properties as obj1
  let obj2 = { a: 1 };

  // // returns true because both arguments
  // // have the same reference
  console.log(Object.is(obj1, obj1)); //true

  // // returns false because obj1 and
  // // obj2 have different references
  console.log(Object.is(obj1, obj2));//false

}

{
  // is() With Special Cases

  // Special Cases

  console.log(Object.is([], []));//false

  console.log(Object.is({}, {}));  //false

  console.log(Object.is(0, -0));  //false

  console.log(Object.is(-0, -0)); //true

  console.log(Object.is(NaN, 0 / 0));  //true
}


// 5. JavaScript Object.hasOwnProperty()

// The Object.hasOwnProperty() method checks if the object possesses the given property.

{
  const obj = {};
  console.log(obj);

  obj.id = 42;

  // // check if id is present in obj or not
  console.log(obj.hasOwnProperty("id"));

  console.log(obj);
}

{
  // Javascript Object.hasOwnProperty()

  // // create an object with property id
  const obj = { id: 42, toString: 10 };

  // // check if id exists in obj 
  console.log(obj.hasOwnProperty("id")); //true

  // // check if name exists in obj 
  console.log(obj.hasOwnProperty("name")); //false

  // // inherited properties return false
  console.log(obj.hasOwnProperty("toString")); //true

  3++
  +
  9
}

// 6. JavaScript Object.freeze()

{
  // The Object.freeze() method freezes an object i.e. it prevents the object from being modified.

  const Obj = { num: "1", num2: "2" }

  Obj.num = "10"

  Object.freeze(Obj)

  Obj.num2 = "20"

  console.log(Obj);

}

// 7. JavaScript Object.getOwnPropertyNames()

{
  // The Object.getOwnPropertyNames() method returns an array of all the properties found in a given object.

  const obj = {
    name: 'Alexander',
    age: 32,
    address: 'Macedonia',
    };

  // find out the properties present in obj
  const propertyNames = Object.getOwnPropertyNames(obj);

  console.log(propertyNames);

}

// 8. Javascript Object.setPrototypeOf()

{
  // The Object.setPrototypeOf() method sets the prototype of the specified object to another object or null.

  // create an empty object
  const obj = {};

  // create a non-empty object parent
  const parent = { foo: 'bar' };

  // set parent as the prototype of obj
  Object.setPrototypeOf(obj, parent);

  // print foo property of parent
  // using the obj object
  console.log(obj.foo);//bar

  console.log(obj);

}

// 9. JavaScript Object.toString()

{
  // The Object.toString() method returns the given object as a string.

  // create a number with value 10
  let num = { 10: "obj" };

  // check the type of num before
  // using the toString() method
  console.log(typeof num);

  // check the type of num after 
  //using the toString() method
  console.log(typeof num.toString());
}

{
  let rollnum = { 15: "pass" }
  console.log(typeof rollnum);
  console.log(typeof rollnum.toString());
}

// 10. JavaScript Object.valueOf()

{
  // The Object.valueOf() method returns the primitive value of the specified object.

  // create a new Number object with value of 12
  let num = new Number(12);
  console.log(num);
  console.log(num.valueOf());//12
}
{
  let name = new String('hyy')
  console.log(name);
  console.log(name.valueOf());
}

// 11. JavaScript Object.values()

{
  // The Object.values() method returns an array containing the enumerable values of an object.

  // array-like object having integers as key
  const obj = { 65: "A", 66: "B", 67: "C" };

  // print the enumerable values of obj
  console.log(Object.values(obj));

}

{
  // values() With Object Having Random Key Ordering

  // object with random key ordering
  const obj1 = { 42: "a", 22: "b", 71: "c" };

  // print the enumerable values of obj1
  console.log(Object.values(obj1));

}

{
  // JavaScript Object.values() With String

  const string = "code";
  console.log(Object.values(string));

  // values() with string returns an array of characters
}