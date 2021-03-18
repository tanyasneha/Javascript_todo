function loop(begin, testfunc, updatefunc, bodyfunc) {
  for (let value = begin;testfunc(value); value = updatefunc(value)) {
    bodyfunc(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2