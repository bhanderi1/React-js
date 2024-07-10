
/*---------------------- Javascript string method ----------------------------*/

/* primitive string */

// 3 type string            ""  ''  ``
// let string1 ="Hello world"
// let string2 ='hello world'
// let string3 =`helow world`
// console.log(string1);
// console.log(string2);
// console.log(string3);

// /* string as object */               new string creating
// let string4 = new String("Hello World")
// console.log(string4);

// array type
// let string5 = string1.split("");
// console.log(string5);

/******  javascript string method ******/

// String length
// String charAt()
// String slice()
// String substring()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charCodeAt()
// String split()
// String includes()

/* Follow String :- WHAT ARE MOST SIMPLE FOO. */
/***********************************************/



/******  String length ******/
{
    let string6 = "This is javascript";
    console.log(string6.length); //18
}
{
    let string6 = "_hello     "
    console.log(string6.length)//11
}
{
    let string6 = "% & 4 - hkufefrsc"
    console.log(string6.length)//17
}


/******  String charAt() ******/

{
    let string7 = "This is javascript";
    let string8 = string7.charAt(12);
    console.log(string8); //5
}
{
    let string7 = "hello world  f  ";
    let string8 = string7.charAt(6)
    console.log(string8);//w
}



/****** String slice() return New String ******/
// slice(indexStart)
// slice(indexStart, indexEnd)
{
    let string9 = "This is javascript";
    let string10 = string9.slice(4); //_is _javascript
    let string11 = string9.slice(-6); //script
    let string12 = string9.slice(-6, -12); //No answer
    let string13 = string9.slice(6, 6); //No answer
    let string14 = string9.slice(-6, 6); //No answer
    let string15 = string9.slice(6, -6); //s_java
    console.log(string15);
}
{
    let string9 = "hello world"
    let string10 = string9.slice(8)//rld
    console.log(string10)

    let string11 = string9.slice(2, -2)
    console.log(string11)        //llo wor

    let string12 = string9.slice(-8)
    console.log(string12) //lo world
}



/******  String substring() return New String ******/
// substring(indexStart)
// substring(indexStart, indexEnd)
{
    let string16 = "This is javascript";
    let string17 = string16.substring(10); //vascript
    let string18 = string16.slice(10); //vascript
    let string19 = string16.substring(-10); //This is javascript
    let string20 = string16.slice(-10); //javascript
    let string21 = string16.substring(10, 20); //vascript
    let string22 = string16.substring(10, -20); //this is ja
    let string23 = string16.substring(-10, 7); //this is
    console.log(string21);
    console.log(string22);
}
{
    let string16 = "hello world"
    let string17 = string16.substring(5)
    console.log(string17) //_world

    let string18 = string16.substring(-10, 5)
    console.log(string18) //hello

    let string19 = string16.substring(10, -5)
    console.log(string19) //hello worl
}



/****** String replace() ******/
{
    let String24 = "WHAT ARE MOST SIMPLE FOO.";
    let String25 = String24.replace("Most", "index");
    console.log(String25);

    let String26 = String24.replace("MOST", "index");
    console.log(String26);

    let string27 = String24.replace("WHAT", "what")
    console.log(string27)
}

/****** String replaceAll() ******/
{
    let string27 = "WHAT ARE MOST HARD MOST FOO.";
    let string28 = string27.replaceAll(/MOST/g, "Hello");
    // let string29 = string28.replaceAll(/MOST/i , "Hello")  //error
    console.log(string28);

    let string29 = string27.replaceAll(/HARD/g, "easy")
    console.log(string29)
}


/****** String toUpperCase() ******/
{
    let string30 = "this is most common language";
    let string31 = string30.toLocaleUpperCase();
    console.log(string31);
}

/******  String toLowerCase() ******/
{
    let string32 = "HELLO";
    let string33 = string32.toLowerCase();
    console.log(string33);
}


/******  String concat() ******/
{
    let string34 = "Hello";
    let string35 = "world";
    let string36 = "How are you!";
    let string37 = string34.concat(" " + string36 + " " + string35);
    console.log(string37);
}
{
    let string = "java"
    let string1 = "script"
    let string2 = string.concat(string1)
    console.log(string2)
}
{
    let string34 = "hello ";
    let string35 = "world ";
    let string36 = "this is";
    let string37 = " javascrpit ";
    let string38 = string34.concat( string35 + string36+ string37);
    console.log(string38);
}



/******  String trim() ******/
{
    let string38 = "     this is most common lecture    ";
    console.log(string38);
    console.log(string38.length);    //34
    let string39 = string38.trim();
    console.log(string39);
    console.log(string39.length);    //27
}
{
    let string = "    hello            "
    console.log(string.length)//21
    let string1 = string.trim()
    console.log(string1)
    console.log(string1.length)//5
}

/******  String trimStart() ******/
{
    let string40 = "  This is most common lecture!   ";
    console.log(string40);
    console.log(string40.length); //33
    let string41 = string40.trimStart();
    console.log(string41);
    console.log(string41.length);//31
}
{
    let string = "    Hello  "
    let string1 = string.trimStart()
    console.log(string1)
    console.log(string1.length)//7
}


/******  String trimEnd() ******/
{
    let string42 = "  this is most coomon lecture!  ";
    console.log(string42);
    console.log(string42.length);//32
    let string43 = string42.trimEnd();
    console.log(string43);
    console.log(string43.length);//30
}
{
    let string = "  Hello  "
    let string1 = string.trimEnd()
    console.log(string1)
    console.log(string1.length)//7
}



/******  String padStart() ******/
{
    let string44 = " this is most coomon lecture!  ";
    console.log(string44);
    console.log(string44.length); //31
    let string45 = string44.padStart(35, "1");
    console.log(string45); //1111 this is most coomon lecture!
    let number1 = "500";
    let number2 = number1.padStart(5, 0);
    console.log(number2);  //00500
}

/******  String padEnd() ******/
{
    let number3 = "500";
    let number4 = number3.padEnd(4, 0);
    console.log(number4); //00500
    console.log(typeof number4); //string
    let number5 = parseFloat(number4);
    console.log(number5); //500
    console.log(typeof number5); //number
}

/******  String charCodeAt() ******/
{
    let string46 = "this is most commom!";
    let string47 = string46.charCodeAt(15);
    console.log(string47); //109  = s value  
}
{
    let string46 = "this is most commom!";
    let string47 = string46.charCodeAt(1);
    console.log(string47); //104
}
{
    let string46 = "this is most commom!";
    let string47 = string46.charCodeAt(5);
    console.log(string47); //105 
}
/****** String split() ******/
{
    let string48 = "wow! what a place";
    console.log(string48);
    let string49 = string48.split("");
    console.log(string49); //convert to the array
}

{
    let string48 = "hello";
    console.log(string48);
    let string49 = string48.split("");
    console.log(string49);
}

{
    let string48 = "world";
    console.log(string48);
    let string49 = string48.split("");
    console.log(string49); 
}

/******  String includes() , true and false ******/
{
    let string50 = "hello world";
    console.log(string50);
    let string51 = string50.includes("z");
    console.log(string51); //false
}

{
    let string50 = "world is beautiful";
    console.log(string50);
    let string51 = string50.includes("i");
    console.log(string51); //true
}

{
    let string50 = "wow!whataplace";
    console.log(string50);
    let string51 = string50.includes("!");
    console.log(string51); //true
}

/* JAVASCRIPT STRING METHOD */       //this is searching methode

// String indexOf()
// String lastIndexOf()
// String search()
// String includes()
// String startsWith()
// String endsWith()
// String match()
// String matchAll()

/******   String indexOf() ******/
{
    let string52 = "wow! what a place"
    console.log(string52)
    let string53 = string52.indexOf("a", 8)
    console.log(string53)                            //10
}
{
    let string52 = "hello"
    console.log(string52)
    let string53 = string52.indexOf("o", 8)
    console.log(string53)                            //-1
}
{
    let string52 = "how are you ?"
    console.log(string52)
    let string53 = string52.indexOf("?", 8)
    console.log(string53)                            //12
}

/******   String lastIndexOf() ******/
{
    let string52 = "wow! what a place"
    console.log(string52)
    let string53 = string52.lastIndexOf("a", 7)
    console.log(string53)                         //7
}
{
    let string52 = "hello"
    console.log(string52)
    let string53 = string52.lastIndexOf("a", 2)
    console.log(string53)                         //-1
}
{
    let string52 = "How are you ? my frinds"
    console.log(string52)
    let string53 = string52.lastIndexOf("a", 7)
    console.log(string53)                         //4
}


/******  String search() ******/
{
    let string56 = "this is javascript"
    console.log(string56)
    let string57 = string56.search("i")
    console.log(string57)                             //2
}
{
    let string56 = "this is javascript"
    console.log(string56)
    let string57 = string56.search("d")
    console.log(string57)                             //-1
}

/******  String startsWith() ******/
// always capitals words start word =true

{
    let string58 = "This Is Javascript"
    console.log(string58)
    let string59 = string58.startsWith("I")
    console.log(string59)                         //false
}
{
    let string60 = "hello"
    console.log(string60)
    let string61 = string60.startsWith("h")
    console.log(string61)                      //true
}
{
    let string60 = "srushti"
    console.log(string60)
    let string61 = string60.startsWith("i")
    console.log(string61)                      //false
}

/******  String endWith() ******/
{
    let string60 = "javascript "
    console.log(string60)
    let string61 = string60.endsWith(" ")
    console.log(string61)                      //ture
}
{
    let string60 = "hello"
    console.log(string60)
    let string61 = string60.endsWith("l")
    console.log(string61)                      //false
}
{
    let string60 = "srushti"
    console.log(string60)
    let string61 = string60.endsWith("i")
    console.log(string61)                      //true
}