/*
1.alert
2.prompt
3.confirm
*/

/* 1.alert */
{
  //   alert("hellow user")
  //   window.alert("this is javascript")
}
{
  //   let a
  //   a=true
  //   alert(a ? "Nagative User" : "Positive User")
}
/* 2.Prompt */
{
  //   const Message =prompt()
  //   document.write(Message)
}
/*3.conifrm */
{
  //   let message=confirm("this is javascript")
  //   document.write(message)
}

/************************* javascript map methods  ********************************/
/*

new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map

*/


//methods
// 1.entries
/* You can create a Map by passing an Array to the new Map() constructor */

{
  //1.
  const Data = new Map([
    ["option-1", 20],
    ["option-2", 30],
    ["option-3", 40],
    ["option-4", 50],
  ]);
  console.log(Data);
  console.log(Data.size);
}




// 2.set
/* The set() method can also be used to change existing Map values */
{
  //1.
  const newmap = new Map();
  newmap.set("item-1", "car");
  newmap.set("item-2", "bus");
  newmap.set("item-3", "truck");
  newmap.set("item-1", 50); //set
  console.log(newmap);
}
{
  //2.
  let map = new Map()
  map.set('1', 'str1')
  map.set(1, 'num1')
  map.set(true, 'bool1')

  alert(map.get(1))
  alert(map.get('1'))

  alert(map.size)
}


// 3.get
/* The get() method gets the value of a key in a Map */
{
  const newmap = new Map([
    ["item-1", "car"],
    ["item-2", "bus"],
    ["item-3", "truck"],
  ]);

  newmap.set("item-1 ", "truck"); //set
  console.log(newmap);

  console.log(newmap.get("item-1")); //get  - output only one variable value->car
}



// 4.size
/* The size property returns the number of elements in a Map */
{
  const Data = new Map([
    ["option-1", 20],
    ["option-2", 40],
    ["option-3", 60],
    ["option-4", 80],
    ["option-5", 90],
  ]);
  const sizes = Data.size;
  console.log(sizes);
}


// 5.delete()
/* The delete() method removes a Map element */
{
  const newmap = new Map([
    ["item-1", "car"],
    ["item-2", "bus"],
    ["item-3", "truck"],
    ["item-4", "auto"],
  ]);

  console.log(newmap);
  console.log(newmap.delete("item-2")); //item-2 is delete
  console.log(newmap);
}

//6. has()
/* The has() method returns true if a key exists in a Map */
{
  const Data = new Map([
    ["option-1", 20],
    ["option-2", 40],
    ["option-3", 60],
    ["option-4", 80],
  ]);

  console.log(Data.has("option-4")); //true
  //    ans is boolian -> true ,false
}

{
  const Data = new Map([
    ["option-1", 20],
    ["option-2", 40],
    ["option-3", 60],
    ["option-4", 80],
  ]);

  Data.delete("option-5");

  const hasss = Data.has("option-4");

  console.log(hasss); //true
  console.log(Data.size); //4
}

// ******************************** set  method ****************************************
/*
new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists in the Set
values()	Returns an iterator with all the values in a Set
size	Returns the number of elements in a Set

*/

{
  const x = new Set([10, 20, 30]);
  console.log(x);
  console.log(x.size);
  //3
}

//1. new set
{
  const x = new Set();

  x.add("a");
  x.add("b");
  x.add("c");
  x.add("d");

  console.log(x);
  console.log(x.size);
}

//2.add
{

  const newset = new Set();

  const a = "a";
  const b = "b";
  const c = "c";

  newset.add(a);
  newset.add(b);
  newset.add(c);

  console.log(newset);
  console.log(newset.size);
}

//  3. delete
{
  const x = new Set(["a", "b", "c"]);
  x.delete("a");
  console.log(x);
  console.log(x.size);
}
{
  const a = new Set(['1', '2', '3', '4'])
  a.delete("1")
  console.log(a);
  console.log(a.size);
}
//4.has
{
  const x = new Set(["a", "b", "c"]);

  let y = x.has("a");

  console.log(y);
}

//5.values
{
  const x = new Set(["a", "b", "c"]);

  let y = x.values();

  console.log(y);
}
{
  const a = new Set(['1', '2', '3', '4'])
  let b = a.values();
  console.log(b);
}

//6.size
{
  const x = new Set(["a", "b", "c"]);

  let y = x.delete("a");

  console.log(y);
  console.log(x);
}
{
  const a = new Set(['1', '2', '3', '4'])
  let b = a.delete('1')
  console.log(a);

}
