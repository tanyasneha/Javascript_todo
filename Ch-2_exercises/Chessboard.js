let gridS = 8;

for (let y = 0; y<gridS; y++) {
  let val= '';
  for (let x=0; x<gridS; x++) {
    val+= ((x+y)%2) ? ' ' : '#';
  }
  console.log(val);
}