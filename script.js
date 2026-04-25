console.log("Recursion project started");


function decimalToBinary(n){
    if(n===0) return "0";
    if(n < 0) return "Invalid input";

    return decimalToBinary(Math.floor(n/2)) + (n%2);
}

