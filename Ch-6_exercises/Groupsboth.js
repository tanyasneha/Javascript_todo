  
class Group {
  constructor() {
    this.contents = [];
  }
  add(val) {
    if (this.contents.indexOf(val) == -1)
    this.contents.push(val);
  }
  delete(val) {
    let i = this.contents.indexOf(val);
    if (i != -1) this.contents.splice(i, 1);
  }
  has(val) {
    if (this.contents.indexOf(val) == -1) return false;
    else return true;
  }
  static from(arr) {
    let g = new Group();
    arr.filter((i) => g.contents.indexOf(i) == -1).map((j) => g.add(j));
    return g;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));


class GroupIterator {
  constructor(g) {
    this.position = 0;
    this.group = g;
  }
  next() {
    if (this.position >= this.group.contents.length) return { done: true };
    this.position++;
    return {
      value: this.group.contents[this.position - 1],
      done: false,
    };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
