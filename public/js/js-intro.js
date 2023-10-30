"use strict;"

const score = [1, 2, 3];
//alert(score);
//alert(score[score.length-1]);

// const total = score[0] + score[1] + score[2];

let total = 0;
for (let i = 0; i < score.length; i++) {
    total = total + score[i];
}
//alert(total);

// let max = score[0];
// for (let i = 1; i < score.length; i++) {
//     if (max < score[i]) {
//         max = score[i];
//     }
// }
//alert(max);

let max = score[0];
score.forEach(function (s) {
    if (max < s) {
        max = s;
    }
})

alert(max);

// function Sum(a,b) {
//     const c = a + b;
//     return c;
// }

// alert(Sum(1,2));
// const sum = function (a, b) {
//     return a+b;
// }

// const sum = (a,b) => {
//     return a+b;
// }

// const sum = (a,b) => a+b;
// alert(sum(1, 2));


/* const a = 'hello';
const b = 1;
const c = 3.14;
const d = true;
const e = b+c;
const f = 'Sum = ' + e.toFixed(2) + " baht";
const g = `Sum = ${e.toFixed(2)} baht`;
alert(g); */
//document.write(a);
//alert(a);
//console.log(a);
//console.error(a);