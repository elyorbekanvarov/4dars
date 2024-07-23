// For ga oid masalalar

// 1 - masala

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 == 1) {
//         console.log(i);
//     }
// }

// 2 - masala

// let num = +prompt("Ixtiyoriy son kirit");
// let p = 1;
// for (let i = 1; i <= num; i++) {
//   p = p * i;
//   console.log(p);
// }

// 3 - masala

// const maxnum = 4;
// let count = 0;
// let arr = [];
// for (let i = 1; i <= maxnum; i++) {
//     for (let l = 1; l <= i; l++) {
//         if(i % l == 0) {
//             count++
//         }
//     if(count == 3) {
//         arr.push(i)
//         break
//     }
// }
// console.log(arr);

// 4 - masala

// let son = + prompt("Son kiriting");
// for(let i = 1; i <= 50; i++) {
//     console.log(i ** 3);
// }

// 5 - masala

// let num1 = + prompt('1-chi sonni kiriting');
// let num2 = + prompt('2-chi sonni kiriting');
// let num3 = + prompt("3-chi sonni kiriting");
// let num4 = + prompt(`4-chi sonni kiriting`);
// let num5 = + prompt(`5-chi sonni kiriting`);
// let max;
// let min;
// for (let i = num1; i <= num5; i++) {
//     if(num1 > num2) {
//         max = num1
//         min = num2
//     } else if(num2 > num1) {
//         max = num2
//         min = num1
//     } else if(num3 > num4) {
//         max = num3
//         min = num4
//     } else if(num4 > num3); {
//         max = num4
//         min = num3
//     } if(num5 > num4) {
//         max = num5
//         min = num4
//     } else (num4 > num5); {
//         max = num4
//         min = num5
//     }
// }
// console.log(max,min);

// 6 - masala

// for (let number = 2; number <= 30; number++) {
//     let isPrime = true;
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (!isPrime) {
//         console.log(number);
//     }
// }

// 7 - masala

// let arr = [];
// for (let i = 1; i <= 5; i++) {
//   let num = +prompt(`${i}- soni kiriting`);
//   arr.push(num)
// }
// for (let i = 4; i >= 0; i--) {
//   console.log(arr[i]);
// }

// 8 - masala

// let sumJuft = 0;
// let sumToq = 0;
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         sumJuft += i ** 2;
//     } else {
//         sumToq += i ** 3;
//     }
// }
// let farq = sumJuft - sumToq;
// console.log(sumJuft);
// console.log(sumToq);
// console.log(farq);

// 9 - masala

// for(let i = 1; i <= 50; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i);
//     }
// }

// 10 - masala

// let sum = 0;
// let count = 0;
// for(let i = 1; i <= 50; i++) {
//     sum+=i
//     count++
// }
// let res = sum / count;
// console.log(res);

// 14 - masala

// let sum = 0;
// for (let i = 1; i <= 200; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//     console.log(sum);
//   }
// }

// Break/continue ga oid masalalar.

// 1 - masala

// for(let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         console.log(i);
//         break
//     }
// }

// 2 - masala

// for(let i = 1; i <= 10; i++) {
//     if(i == 3 || i == 7) {
//         continue
//     }
//     console.log(i);
// }

// 3 - masala

// let num = + prompt('Sonni kiriting');
// while (true) {
//     if(son === 7) {
//         console.log("Topildi!");
//         break
//     }
//     num = + prompt('Yana urinib koring. Istalgan son kiriting')
// }

// 4 - masala

// for(let i = 1; i <= 10; i++) {
//     if(i % 2 == 0) {
//         continue
//     }
//     console.log(i);
// }

// 5 - masala

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     if (i > 50) {
//         break;
//     }
// }