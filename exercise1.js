////// EXERCISE 1

const array = [2, 10, -12, 0, 32, -1, -9, 111];

const positiveNumbers = array.filter((number) => {
  return number > 0;
});

console.log(positiveNumbers);

const positiveSum = positiveNumbers.reduce((total, current) => {
  return total + current;
});

console.log(positiveSum);

////// EXERCISE 2

const array2 = ["a", "a", "b", "b", "b", "c", "c", "c", "c", "d"];

const count = array2.reduce((total, value) => {
  return {
    ...total,
    [value]: (total[value] || 0) + 1,
  };
}, {});

console.log(count);

////// EXERCISE 3

function addAsync(param1, param2) {
  return new Promise((resolve, reject) => {
    if (typeof param1 == "number" && typeof param2 == "number") {
      resolve("parameters are numbers");
    } else {
      reject("parameters are not numbers");
    }
  })
    .then((val) => console.log(val))
    .catch((error) => console.log(error));
}

addAsync(2, 2);
addAsync(2, "beer");
