
function loadData(){
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            console.log(this.response);
          document.getElementById("demo").innerHTML = this.responseText;
        }
        else if(this.readyState == 4 && this.status == 404)
        {
            document.getElementById("demo").innerHTML = "File not Fond"; 
        }

    };
    xhttp.open('GET',"readme.txt",true)
    xhttp.send()
 }


/*--------------------------------- Javascript async and await keyword -----------------------------*/

// syntax
//async function Data(parameter1, patameter2){
// }

async function f(){
    console.log("async action");
    return Promise.resolve(1)
}
f()

/*----------------------------------- Promise in javascript ----------------------------------------*/
 let Promises = new Promise(function(resolve ,reject){
     resolve("Promise Resolve")
     console.log(result);
 })
 .then(function(result){
    console.log(result);
 })
//  .catch(error){
//  }


/*-------------------------------Promise with async and await Javascript ---------------------------*/

 let Promises1 =new Promise(function(resolve ,reject){
   setTimeout(
    function(){
      resolve("Primse resolve 1")
    },3000
   );
 });

 let Promises2 =new Promise(function(resolve ,reject){
   setTimeout(
    function(){
      resolve("Primse resolve 2")
    },10000
   );
 });

//  async function

 async function asyncfun(){
   let result1 =await Promises1
   let result2 =await Promises2
   
  console.log(result1);
  console.log(result2);
  console.log("Hello");
 }
//  calling function
 asyncfun()