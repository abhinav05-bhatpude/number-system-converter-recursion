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

console.log(decimalToOctal(10))
