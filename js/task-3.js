function getElementWidth(content, padding, border) {
  content = Number.parseFloat(content);
  padding = Number.parseFloat(padding);
  border = Number.parseFloat(border);
  const result = content + (padding + border) * 2;
  return result;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

// const number = 3;
// function calculateTotal(number) {
//   let summa = 0;
//   let cycle = 1;
//   while (cycle <= number) {
//     summa += cycle;
//     cycle += 1;
//   }
//   return summa;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// let summa = 0;
// function calculateEvenTotal(number) {
//   let summa = 0;
//   for (let index = 2; index <= number; index++) {
//     //     // console.log(index);
//     if ((index %= 2) === 0) {
//       summa += index;
//       console.log(summa);
//     }
//   }
//   return summa;
//   //   // console.log(summa);
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
