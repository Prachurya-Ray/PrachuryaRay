var a = parseInt(prompt("Enter value of a:"));

function pattern(a) {
  var arr = []; 
  var n = 1;
  while (a--) {
    arr.push(n);
    n = n + 2;
  }
  return arr;
}

const result = pattern(a); 
alert("Result: " + result);


