class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
"use strict";
  while(true) {
    try {
      return primitiveMultiply(a, b);
    } catch (exception) {
      if (!(exception instanceof MultiplicatorUnitFailure))
        throw exception;
    }
  }
}

console.log(reliableMultiply(8, 8));
