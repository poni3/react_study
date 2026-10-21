let arr1 = [1,2,3]
//1. push 배열 맨 뒤에 추가
const newLength = arr1.push(4);
//console.log(arr1)

//console.log(arr1)
//console.log(newLength)

//2. 배열 맨뒤요소 제거 후 반환
let arr2 = [1,2,3]

const popeditem = arr2.pop();

//console.log(arr2)
//console.log(popeditem)

//3. 배열의 맨 앞 요서 제거 반환
let arr3 = [1,2,3]

const shifeditem = arr3.shift();
//console.log(arr3)
//console.log(shifeditem)

// 4. 배열 맨 앞에 요소 추가
let arr4 = [1,2,3]

const newLength2 = arr3.unshift(0);
//console.log(arr4)
//console.log(newLength2)

// 5. slice 배열 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5]
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);
// console.log(sliced)
// console.log(sliced2)
// console.log(sliced3)
// console.log(arr5)

// 6. concat 두개의 배열 붙여서 새로운 배열

let arr6 = [1,2];
let arr7 = [3,4];

let concatArr = arr6.concat(arr7)
console.log(concatArr)