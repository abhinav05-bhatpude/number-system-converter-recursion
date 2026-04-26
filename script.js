console.log("Recursion project started");


function decimalToBinary(n){
    if(n===0) return "0";
    if(n < 0) return "Invalid input";

    return decimalToBinary(Math.floor(n/2)) + (n%2);
}

function decimalToOctal(n){
    if(n===0) return "0";
    if(n < 0) return "Invalid input";

    return decimalToOctal(Math.floor(n/8)) + (n % 8);
}

function decimalToHex(n){
    const hexChars="0123456789ABCDEF";

    if(n === 0) return "0";
    if(n < 0) return "Invalid input";

    return decimalToHex(Math.floor(n/16)) + hexChars[n % 16];
}
console.log(decimalToHex(255));

console.log(decimalToBinary(5));
console.log(decimalToOctal(20));
console.log(decimalToHex(100));

const numberInput=document.getElementById("numberInput");
const typeSelect=document.getElementById("typeSelect");
const convertBtn=document.getElementById("convertBtn");
const output=document.getElementById("output");