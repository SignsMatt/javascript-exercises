
// First Try:

// const removeFromArray = function (arr, ...args) {
//   for (let i = 0; i < arr.length; i++) {
//     if (args.includes(arr[i])) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// };

const removeFromArray = function (arr, ...args) {
  let newArray = [];
  arr.forEach((element) => {
    if (!args.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
