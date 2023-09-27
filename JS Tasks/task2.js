var str = prompt("Enter  : ");

let result  =  str.split('').sort().join('');
document.getElementById("result").innerHTML = result;
console.log(result);