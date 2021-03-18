Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@tanyasneha94-web 
mukherje2
/
eloquentjsexe
1
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
eloquentjsexe/chap_5/scriptsdomdir.js /

Abhishek Mukherjee finished chap 5 exe
Latest commit 1850b33 on Feb 12
 History
 0 contributors
44 lines (40 sloc)  927 Bytes
  
const SCRIPTS = require("./scripts");
// console.log(SCRIPTS);

function scriptFromCode(c) {
  for (let sc of SCRIPTS) {
    if (
      sc.ranges.some(([f, t]) => {
        return c >= f && c <= t;
      })
    ) {
      return sc;
    }
  }
  return null;
}

function countBy(items, groupNamer) {
  let counts = [];
  for (let i of items) {
    let name = groupNamer(i);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let dom = countBy(text, (c) => {
    let sc = scriptFromCode(c.codePointAt(0));
    return sc ? sc.direction : "none";
  }).reduce((x, y) => {
    return x.count > y.count ? x : y;
  });
  return dom.name;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));

