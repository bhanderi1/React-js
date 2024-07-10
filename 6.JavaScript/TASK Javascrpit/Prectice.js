const array = [0,1,2,3,4,5,6];

array.find((value, index) => {
    console.log("Visited index", index, "with value", value);
  });

array.find((value, index) => {
    if (index === 0) {
      console.log("Deleting array[5] with value", array[5]);
      delete array[5];
      delete array[4];
      delete array[3];
    }
    console.log("Visited index", index, "with value", value);
});

// ----------------------------------------------------------------

const arrayLike = {
    length: 3,
    "-1": 0.1, 
    0: 2.0,
    1: 7.3,
    2: 4,
  };
  console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));

  //----------------------------------------------------------------

//   const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   const result = inventory.find(({ name }) => name === "apples");
//   const result1 = inventory.find(({ name }) => name === "bananas");
  
//   console.log(result);
//   console.log(result1);

  //-----------------------------------------------------------------

  const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .find((num, idx, arr) => {
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); 

//--------------------------------------------------------------------

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(checkAdult());

//--------------------------------------------------------------------