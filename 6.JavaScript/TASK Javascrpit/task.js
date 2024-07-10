// 1. Display Alert in JavaScript
{
    // alert("This is javascript")
}


//2.Display Confirmation box using JavaScript
{
    // if(confirm("your select option is right!"))
    // {
    //    alert("yes");
    // }
    // else{
    //    alert("No");
    // }
}


//3. Display Prompt box using JavaScript
{
    // const Message = prompt()
    // document.write(Message)
}
{
    // const Message = prompt()
    // alert(Message)
}


// 4. mouseover and mouseout in javascript
{
    function mouseover(text) {
        text.style.color = "red";
    }
    function mouseout(text) {
        text.style.color = "black"
    }
}


// 5. Use keypress In JavaScript to Display Alerts
{
    function keypress() {
        alert("submit user value")
    }
}

// 6. JavaScript Validation Examples
// 7. Textbox required validation in javascript
// 8. Email validation in JavaScript
// 9. Letter Validation in JavaScript
// 10. Number Validation in JavaScript
// 11. Letter and Number Validation in JavaScript
// 12. IP Address Validation in JavaScript


// 13. Retrieve Today’s Date in JavaScrip
{
    const date = new Date()
    console.log(date);
}


// 14. Reverse array javascript
{
    let num = ["1", "2", "3", "4", "5"]
    console.log(num)
    let Reverse_num = num.reverse()
    console.log(Reverse_num)
}


//15.JavaScript concate or merge two Arrays
{
    let array1 = ["1", "2", "3", "4", "5"]
    let array2 = ["6", "7", "8", "9", "10"]

    let array3 = array1.concat(array2)
    console.log(array3)
}


// 16. Reverse String in JavaScript
{
    function reverseString(str) {
        const string1 = str.split("")
        const string2 = string1.reverse()
        const string3 = string2.join("")
        console.log(string3);
    }
    reverseString("how are you!")
}


//17. JavaScript Open a page using window.open() method
function opennewwindow() {
    window.open("http://127.0.0.1:5500/Task.html")
}


//18.if else statement in JavaScript
{
    let age = 85;
    if (age >= 18) {
        console.log("You Are Aligible");
    }
    else {
        console.log("Not Aligible");
    }
}


//19. Insert element in array javascript
{
    //push method
    let array = ['1', '2', '3', '4', '5']
    array.push("6")
    console.log(array)
}
{
    //apply method
    let a = ['A', 'B']
    let b = ['C', 'D']
    a.push.apply(a, b)
    console.log(a);
}
{
    //unshift
    let array = ['1', '2', '3', '4', '5']
    array.unshift("0")
    console.log(array)
}


//20.get current url javascript
{
    document.getElementById("demo").innerHTML = "current Url this page :" + window.location.href
}


//21. getElementsByClassName() method in JavaScript
{
    const elemenet = document.getElementsByClassName('className')
    elemenet[0].innerHTML = "This is class name dom method"
}


//22. getElementByTagName() method in JavaScript
{
    const elemenet = document.getElementsByTagName('h1')
    function addText() {
        for (let i = 0; i < elemenet.length; i++) {
            // elemenet[i].innerHTML = "hello world"
            elemenet[i].style.color = "gray"
            elemenet[i].style.background = "pink"
        }
    }
    addText();
}


// 23. Disable Browser back and forward button in browser using JavaScript
// {
//     function preventBack() 
//     { window.history.forward(); }  
//     setTimeout("preventBack()", 0);  
//     window.onunload = function () { null };  
// }


// 24. Disable back button in browser using javascript
// 25. Disable Forward button in browser using JavaScript:
// 26. Disable Forward button in browser using JavaScript:
// 27. Disable Dropdown list using JavaScript
// 28. Enable Dropdown list using JavaScript
// 29. Disable mouse right click using javascript
// 30. JavaScript Date Countdown Timer
// 31. Checkbox validation using JavaScript (javascript checkbox checked)

// 32. get query string value in javascript
// 33. JavaScript get or set radio button value
// 34. Get radio button selected value using JavaScript
// 35. Set radio button value using JavaScript
// 36. JavaScript screen height
// 37. auto refresh page javascript


// 38. Convert Celsius Value to Farenheit Value in JavaScript
{
    function CelsiusFarenheit(n) {
        console.log((n * 9 / 5) + 32)
    }
    CelsiusFarenheit(45)//113
}


// 39. javascript get today’s date
{
    const date = new Date()
    console.log(date);
}


// 40. Scroll Down Event in JavaScript
{
    //html fill
}


// 41. JavaScript Animation example
// 42. Play and Pause video in JavaScript
// 43. Change background colour of div javascript

// 44. Change the page colour in Every 5 sec in JavaScript
{
    let i = 0
    let j = 0
    function divcolor() {
        let divtag = document.getElementById("div1")
        let bgcolor = ["yellow", "purple", "blue", "brown"]
        let textcolor = ["red", "white", "gray", "black"]
        divtag.style.backgroundColor = bgcolor[i]
        divtag.style.color = textcolor[j]
        i = (i + 1) % bgcolor.length
        j = (j + 1) % textcolor.length
    }
    setInterval(divcolor, 5000)
}
// 45. Display Message every 3 second using Javascript
{
    setInterval(
        function greet() {
            console.log("hello");
        }, 3000
    )
}
// 46. JavaScript get max value in array of objects
// 47. Sort and Reverse an array of Objects using JavaScript
{

}


// 48. Find index of Largest value in An Array in JavaScript
{
    const array = [1, 5, 9, 2, 0]
}


// 49. Try and Catch in JavaScript

// {try{
//     eval("alert('hello)")
// }
// catch(err)
// {
//     document.getElementById("try").innerHTML=err.name
// }
// }

// 50. Return Boolean value of an Integer In JavaScript
{
    // let boolean =1
    // function value(){
    //     let i = boolean ? true :false
    //     document.getElementById('result').innerHTML =i
    // }
    // value()
}


// 51. JavaScript Check an object is an array or not
// 52. Display Table Number in JavaScript
// 53. Reload page JavaScript
// 54. Break and Continue in JavaScript
// 55. JavaScript Conditional Operator
// 56. Example of this KeyWord in JavaScript
// 57. JavaScript Validation API
// 58. JavaScript Set dropdown value on Button Click
// 59. Display Images Based on User Selection
// 60. JavaScript Bind Arrays Value into Dropdown list
// 61. javascript browser detection 


// 62. How to sort array value using sort() method in JavaScript
{
    let array1 = [15, 2, 78, 4, 110, 96, 12, 3]
    console.log(array1)
    let numbersorted = array1.sort((a, b) => a - b)
    console.log(numbersorted)// 2,3,4,12,15,78,96,110
}
