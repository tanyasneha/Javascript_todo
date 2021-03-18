const reverseArray = (array) => {
  let revarray = [];
  for (let i = 0; i < array.length; i++) {
    revarray.unshift(array[i]);
  }
  return revarray;
};

const reverseArrayAtPlace = (array) => {
  for (i = 0; i < Math.ceil(array.length / 2); i++) {
    let tmp = array[i];
    array[i] = array[array.length - (i + 1)];
    array[array.length - (i + 1)] = tmp;
  }
  return array;
};

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayAtPlace([1,2,3,4,5]));
