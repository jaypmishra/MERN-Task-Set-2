var number = prompt("Enter a Number : ");
document.getElementById("number").innerHTML = number;
let result = number.toString().split('').reverse().join('');
document.getElementById("reverse").innerHTML = result;
console.log(result);