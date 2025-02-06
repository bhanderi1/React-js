// {

//     function product(name , price){
//         this.name = name;
//         this.price =price;
//     }
    
//     function food(name , price){
//         product.call(this,name,price)
//         this.category = 'food'
//     }
    
//     console.log(new product('cheese' ,5).price);
// }



// ---------------------------------------------------------
let name ={
    firstname :"srushti",
    lastname  :"Bhanderi",
    printfullname : function(hometown ,state){
        console.log(this.firstname + " " + this.lastname + " From " + hometown + " ," +state)
    }
}
name.printfullname.call(name, "ahmadabad" , "gujarat")

let name2 = {
    firstname : "Divyesh",
    lastname : "Bhanderi",
}
//function borrowing
name.printfullname.call(name2, "Surat" , "gujarat")

// apply
name.printfullname.apply(name2 ,["mumbai" , "maharastra"])

//bind
let printmyname =name.printfullname.bind(name2 , "delhi" , "maharatra")
console.log(printmyname);
printmyname()