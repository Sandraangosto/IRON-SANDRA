function sumThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3; 
}
console.log(sumThreeNumbers(1,222,3));

function isStringOddOrEven(name) {
    if (name.length % 2) {
      return `${name} has an even number of letters.`;
    } else {
      return `${name} has an odd number of letters.`;
    }
      
  }

  console.log(isStringOddOrEven("Jane"));
  console.log(isStringOddOrEven("Jonh"));