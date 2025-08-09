var a = parseFloat(prompt("Enter value of a:"));
var b = parseFloat(prompt("Enter value of b:"));
const c = prompt("Enter type of operation:");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function printing(func) {
  console.log(a);
  alert("Result: " + func(a, b));
}

function errorPrint() {
  alert("Invalid operation");
}

function choose() {
  if (c == "+") printing(add);
  else if (c == "-") printing(sub);
  else if (c == "*") printing(mul);
  else if (c == "/") printing(div);
  else errorPrint();
}

choose(c);
