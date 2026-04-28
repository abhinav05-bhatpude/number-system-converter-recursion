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

function binaryToDecimal(str){
    if(str.length ===0) return 0;

    let last=Number(str[str.length - 1]);
    let rest=str.slice(0,-1);

    return binaryToDecimal(rest) * 2 + last;
}

console.log(binaryToDecimal("101"));

const numberInput=document.getElementById("numberInput");
const typeSelect=document.getElementById("typeSelect");
const convertBtn=document.getElementById("convertBtn");
const output=document.getElementById("output");

convertBtn.addEventListener("click",function(){
    const num=Number(numberInput.value);
    const type=typeSelect.value;

    if(isNaN(num)|| num <0){
        output.innerText="Enter valid number ❌";
        return;
    }

    let result="";
    if(type==="binary"){
        result=decimalToBinary(num);
    }
    else if(type==="octal"){
        result=decimalToOctal(num);
    }
    if(type==="binaryToDecimal"){
        result=binaryToDecimal(numberInput.value);
    }
    if (type === "binaryToDecimal" && /[^01]/.test(numberInput.value)) {
  output.innerText = "Enter valid binary number ❌";
  return;
}
    else{
        result=decimalToHex(num);
    }
    
    
   output.innerHTML=`
   <strong>Input:</strong> ${numberInput.value} <br>
   <strong>Type :</strong> ${type} <br>
   <strong>Result:</strong> ${result}
   `;
});

typeSelect.addEventListener("change",function(){
    if(typeSelect.value === "binaryToDecimal"){
        numberInput.placeholder="Enter binary number";
    }
    else{
        numberInput.placeholder="Enter decimal number";
    }
});