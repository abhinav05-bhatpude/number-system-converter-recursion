function decimalToBinary(n){
  if(n === 0) return "";
  return decimalToBinary(Math.floor(n/2)) + (n % 2);
}

function decimalToOctal(n){
  if(n === 0) return "";
  return decimalToOctal(Math.floor(n/8)) + (n % 8);
}

function decimalToHex(n){
  const hexChars = "0123456789ABCDEF";
  if(n === 0) return "";
  return decimalToHex(Math.floor(n/16)) + hexChars[n % 16];
}

function binaryToDecimal(str){
  if(str.length === 0) return 0;
  return binaryToDecimal(str.slice(0, -1)) * 2 + Number(str[str.length - 1]);
}

const numberInput = document.getElementById("numberInput");
const typeSelect = document.getElementById("typeSelect");
const convertBtn = document.getElementById("convertBtn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  const value = numberInput.value.trim();
  const num = Number(value);
  const type = typeSelect.value;

  let result = "";

  if(type === "binary"){
    if(isNaN(num) || num < 0){
      output.innerText = "Enter valid decimal number ❌";
      return;
    }
    result = num === 0 ? "0" : decimalToBinary(num);
  }
  else if(type === "octal"){
    if(isNaN(num) || num < 0){
      output.innerText = "Enter valid decimal number ❌";
      return;
    }
    result = num === 0 ? "0" : decimalToOctal(num);
  }
  else if(type === "hex"){
    if(isNaN(num) || num < 0){
      output.innerText = "Enter valid decimal number ❌";
      return;
    }
    result = num === 0 ? "0" : decimalToHex(num);
  }
  else if(type === "binaryToDecimal"){
    if(value === "" || /[^01]/.test(value)){
      output.innerText = "Enter valid binary number ❌";
      return;
    }
    result = binaryToDecimal(value);
  }

  output.innerHTML = `
    <strong>Result:</strong> ${result}
  `;

  numberInput.value = "";
});

typeSelect.addEventListener("change", () => {
  if(typeSelect.value === "binaryToDecimal"){
    numberInput.placeholder = "Enter binary (e.g. 1010)";
  } else {
    numberInput.placeholder = "Enter decimal (e.g. 25)";
  }
});