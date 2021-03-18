const deepEqual = (z, y) => {
  if (z === y) return true;
  if (z == null || y == null || typeof z != "object" || typeof y != "object")
    return false;
  if (Object.keys(z).length != Object.keys(y).length) return false;
  for (let a of Object.keys(z)) {
    if (!Object.keys(y).includes(a) || !deepEqual(z[a], y[a])) return false;
  }

  return true;
};

let object = { here: { is: "an" }, object1: 2 };
console.log(deepEqual(object, object));
console.log(deepEqual(object, { here: 1, object1: 2 }));
console.log(deepEqual(object, { here: { is: "an" }, object1: 2 }));

