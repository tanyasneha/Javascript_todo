const range = (start, end, step) => {
  let list = [];
  while (start != end) {
    list.push(start);
    if (step == undefined) step = 1;
    start = start + step;
  }
  list.push(end);
  return list;
};

const sum = (array) => {
  let result = 0;
  array.map((i) => (result += i));
  return result;
};

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

