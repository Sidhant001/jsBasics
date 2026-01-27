//Write a function which takes an array and returns an array of square of the even numbers only
let num = [1,2,3,46,5,6,7];
let arr1 = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i] * arr[i]);
        }
            
        }
        return result;
    }
    console.log(arr1(num));