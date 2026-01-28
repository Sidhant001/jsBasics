//Check if a number is even or odd

function numbertype(num){
if (num%2===0) {
    return console.log("Even")}
    else{ return console.log("Odd")
     }
}
numbertype(4)

//Reverse a string

function Reverse(str) {
  return str.split("").reverse().join("");
}
console.log(Reverse("Hello"))

//Check if a string is palindrome

function Palindromestr(a){
 return a===a.split("").reverse().join("");
}

console.log(Palindromestr("madam"));
console.log(Palindromestr("hello")); 

//Find maximum number in an array

function Maxnum(Arr){
let Max= Arr[0] ; 
    for (let a =0 ; a < Arr.length; a++){
        if (Arr[a]>Max) {
            Max=Arr[a];
        } 
    }return Max;
}
console.log(Maxnum([2,43,454,565,234,454]))

//Count vowels in a string

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Javascript id a programming Language"))

// Remove duplicates from an array

function removeduplicate(arr) {
  let unique = [];

  for (let b = 0; b < arr.length; b++) {
    if (!unique.includes(arr[b])) {
      unique.push(arr[b]);
    }
  }
  return unique;
}console.log(removeduplicate([23,43,34,645,654,456,654,323,323,34,]))

// Sum all numbers in an array

function Addallnum(arr){
    let arr1 = 0;
   for (let c = 0; c < arr.length; c++) {
    arr1+=arr[c];
}return arr1;
}
console.log(Addallnum([123,123,543,645,756]))

// Find factorial of a number

function factorial(n) {
  let fact = 1;

  for (let e = 1; e <= n; e++) {
    fact *= e;
  }

  return fact;
}
console.log(factorial(5)); 

// Check if a number is prime

function Prime(num){
  if (num <= 1) {
    console.log("Not a prime number")
    return;}

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      console.log("It is a prime Number")
      return false;
    }
  }
  return true;
}
console.log(Prime(9))



//Convert Celsius to Fahrenheit

function CeltoFar(Celsius){
  return (Celsius*9/5)+32;
}
console.log(CeltoFar(39))












