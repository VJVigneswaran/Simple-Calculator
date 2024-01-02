function display(val) {
  document.getElementById("result").value += val;
  return val;
}
function clearScreen() {
  document.getElementById("result").value = "";
}
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
  return y;
}
function clearLast() {
  document.getElementById("result").value = document
    .getElementById("result")
    .value.substring(0, document.getElementById("result").value.length - 1);
}
