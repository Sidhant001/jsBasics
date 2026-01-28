// Print numbers from 1 to 10
for(let a=1 ; a<=10;a++){
    console.log(a)
}

//Print even numbers from 1 to 50

function evennum(num){
    for(let a =1; a<=num;a++){
    if (a%2===0) {
     console.log(a)
    }
    }
}
evennum(50)

// Find sum of numbers from 1 to 100

function sumofnum(total){
    let sum = 0;
   for (let b=1; b<=total;b++){
    sum+=b
}return sum;
}
console.log(sumofnum(100))

// Print multiplication table of 5

function prTable(num) {
  for (let c = 1; c <= 10; c++) {
    console.log(`${num} x ${c} = ${num * c}`);
  }
}

prTable(5);

//Write a function that generates the Fibonacci series up to N terms.

function fibonacci(n) {
  let series = [];

  if (n <= 0) return series;
  if (n === 1) return [0];

  series.push(0, 1);

  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}

console.log(fibonacci(10));

// Count digits in a number

function countDigits(num) {
  let count = 0;

  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

console.log(countDigits(47534857649659));

// Given an array of numbers, write a program using nested loops to find all pairs whose sum is equal to a given target number.

let arr = [2, 4, 3, 5, 7];
let target = 7;

for (let d = 0; d < arr.length; d++) {
  for (let e = d + 1; e < arr.length; e++) {
    if (arr[d] + arr[e] === target) {
      console.log(`(${arr[d]}, ${arr[e]})`);
    }
  }
}




