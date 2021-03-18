const arrayToList = (array) => {
  let list = null;
  for (let p = array.length - 1; p >= 0; p--) {
    list = { value: array[p], rest: list };
  }
  return list;
};

const listToArray = (list) => {
  let array = [];
  let a = list;
  while (a) {
    array.push(a.value);
    a = a.rest;
  }
  return array;
};

const prepend = (element, list) => {
  return {
    value: element,
    rest: list,
  };
};

const ath = (list, a) => {
  if (!list) return undefined;
  else if (a == 0) return list.value;
  else return ath(list.rest, a - 1);
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(ath(arrayToList([10, 20, 30]), 1));
