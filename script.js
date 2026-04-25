console.log("Recursion project started");


function decimalToBinary(n){
    if(n===0) return "0";
    if(n===1) return "1";

    return decimalToBinary(Math.floor(n/2)) + (n%2);
}
console.log(decimalToBinary(10))