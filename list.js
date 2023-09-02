const numbers = [5,7,11,2,1];

let i = 0;
let max = numbers[0];
while (i<numbers.length){
    if (numbers[i]>max){
        max = numbers[i];
    }
    i++;
}
console.log(max);

//3
// let max = numbers[0];
// numbers.forEach((number)=>{
//     if (number > max){
//         max = number;
//     }
// })
// console.log(max);

//2
// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] >max){
//         max = numbers[i]
//     }
// }
// console.log(max);

//1
// let max = numbers[0];
// for (const number of numbers){
//     if (number > max){
//         max = number;
//     }
// }
// console.log(max);

