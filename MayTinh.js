
function cong() {
    let a = + document.getElementById("a").value;
    let b = + document.getElementById("b").value;
    let c = a+b;
    document.getElementById('result').innerText = "Result Addition: " + c;

}function tru() {
    let a = + document.getElementById("a").value;
    let b = + document.getElementById("b").value;
    let c = a-b;
    document.getElementById('result').innerText = "Result Subtraction: " + c;

}function nhan() {
    let a = + document.getElementById("a").value;
    let b = + document.getElementById("b").value;
    let c = a*b;
    document.getElementById('result').innerText = "Result Multiplication : " + c;

}function chia() {
    let a = + document.getElementById("a").value;
    let b = + document.getElementById("b").value;
    let c = a/b;
    document.getElementById('result').innerText = "Result Division : " + c;

}