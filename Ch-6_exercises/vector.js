class Vector {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  plus(otherv) {
    return new Vector(this.a + otherv.a, this.b + otherv.b);
  }

  minus(otherv) {
    return new Vector(this.a - otherv.a, this.b - otherv.b);
  }

  get length() {
    return Math.sqrt(this.a * this.a + this.b * this.b);
  }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
