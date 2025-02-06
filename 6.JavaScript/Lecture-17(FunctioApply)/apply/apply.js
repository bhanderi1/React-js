/*Function Apply() Method */

{
    const NewObj = {
        firstName: 'taylor',
        lastName: 'Jackson'
    }

    function grow(wish, message) {
        return `${this.firstName} ,${wish}. ${message}`;
    }

    const result = grow.apply(NewObj, ["Good Morning", "How are you!"])
    console.log(result);//taylor ,Good Morning. How are you!
}


{
    const NewObj = {
        firstName: 'Taylor',
        lastName: 'Jackson'
    }

    const grow = (wish, message) => {
        return `${this.firstName}, ${wish}. ${message}`
    }

    const result = grow.apply(NewObj, ["good morning", "how are you!"])
    console.log(result);//undefined, good morning. how are you!
}

/*Function Borrowing method */
const item = {
    name: 'AUDI',
    discription() {
        return `${this.name} is of ${this.color} color.`
    }
}
const bike = {
    name: 'BUGATI',
    color: 'Black'
}
let result = item.discription.apply(bike)
console.log(result)//BUGATI is of Black color.


/* Append Array */
let color1 = ["Red", "Green", "Blue"];
let color2 = ["Yellow", "Black"];

//  appending two arrays color1 and color2
color1.push.apply(color1, color2);
console.log(color1);


/* Array Merge */
{

    let Array1 = ['dataObj', 'dataArr', 'object', 'string']
    let Array2 = [10, 20, 30, 40, 50, 60]
    let NewArry = Array1.concat(Array2)
    console.log(NewArry);//['dataObj', 'dataArr', 'object', 'string', 10, 20, 30, 40, 50, 60]

    // let NewArry = Array1.push.apply(Array1 , Array2)
    // console.log(NewArry);
    // console.log(Array1);
}