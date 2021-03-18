async function locateScalpel(nest) {
    let next, current = nest.name;
      for (;;){
        next = await anyStorage(nest, current, "scalpel");
        if (next === current) {
            return current;
        } 
        current = next;
      }
  }
  
  function locateScalpel2(nest) {
    let current = nest.name;
    function loop(current) {
      return anyStorage(nest, current, "scalpel").then(next => {
        if (next === current) {
            return current;
        } 
        return loop(next);
      });
    }
    return loop(current);
  }
locateScalpel(bigOak).then(console.log);
locateScalpel2(bigOak).then(console.log);
  
