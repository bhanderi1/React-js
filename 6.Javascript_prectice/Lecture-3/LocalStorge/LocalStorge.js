// LocalStorge:-
// => The localStorage object allows you to save key/value pairs in the browser.
//=>The localStorage object stored data with no expiration date.
//=> The data is not deleted whrn the browser is colsed and are available for future sessions.

// how to add the from localstorage
localStorage.setItem("jsCourseTest", "addingData")

// how to the from localstorage
localStorage.getItem("jsCourseTest")

// remove datat
localStorage.removeItem("jsCourseTest")

// =>Local storage can only store strings , so when you want to store a complex data structure like an array or an object, you need to convert it to a string using JSON.stringify.

// JSON.stringify : coverts a Javascript object into a JSON string.
// useful when you want to send data to a server or store it in a text file , as JSON is a common data interchange format.

const data = {name : "srushti" , age:20 ,City:"Surat"}
const jsonstring = JSON.stringify(data);
console.log(jsonstring);// {"name":"srushti","age":20,"City":"Surat"}



// JSON.Parse : Converts a JSON into a Jsvascript object.
// USeful when you receive JSON data from aserver or read it from a file , and you want to with it as a Javascript object.

// json string => original format (object , array)

const jsonstringParse = '{"name" : "Srushti" , "age":20}'
const parseData = JSON.parse(jsonstringParse)
console.log(parseData);//{name: 'Srushti', age: 20}



