
function add(a, b) {
 return a + b;
}

function subtract(a, b) {
return  a - b;
}

function multiply(a, b) {
 return a * b;
}

function divide(a, b) {
 return a / b;
}

function inc(a) {
  return a += 1;
}

function dec(a) {
  return a -= 1;
}

function makeInt(a) {
  return parseInt('a');
}

function makeInt() {
   return parseInt('0x2328', 10);
}

function preserveDecimal() {
  if (parseFloat ('2.222')) {
    return parseFloat ('2.222');
  }
  if (parseFloat ('sldkjflksjf')) {
    return parseFloat ('sldkjflksjf');
  }
}