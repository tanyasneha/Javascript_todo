const countBs= function(str) {
let result=0;
for (let i=0;i<str.length;i++)
 {
if (String(str[i])==="B")
{
result+=1; 
}
}
return result;
}

const countChar= function(str,strf) {
let result=0;
for (let i=0;i<str.length;i++) {
if (String(str[i])===strf )
{
result+=1;
}
}
return result;
}

console.log(countBs("BBBC"));
console.log(countChar("kkkkkfdgdgd","k"));