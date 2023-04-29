const result = (7 + 5) / 3 - 8;
console.log(result);

const i = 10 + (5 * 2 ** 3) / 4 - 6;
//  === 10 + 5 * 8 / 4 - 6 <== start with the exponents (2 ** 3)
//  === 10 + 40 / 4 - 6 <== then multiplication (5 * 8)
//  === 10 + 10 - 6 <== then division (40 / 4)
//  === 20 - 6 <== then addition (10 + 10 )
//  ==> 14 <== and finally finish with subtraction (20 - 6)

let greeting = `Yo, Ironhack!`;


let name = "Ana";
console.log(`Hello there, ${name}!`);
// ==> Hello there, Ana!

console.log(`${name} walks every day at least ${1 + 2} km.`);
// ==> Ana walks every day at least 3km.


const fruits = `
1. banana
2. apple
3. orange
4. cherry
`;

console.log(fruits);
// 1. banana,
// 2. apple,
// 3. orange,
// 4. cherry
