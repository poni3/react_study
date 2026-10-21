let arr1 = [1,2,3]

arr1.forEach(function(item, idx, arr){
  //console.log(idx, item*2)  
})

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item *2)
})
//console.log(doubledArr)

let arr2 = [1,2,3]
let isInclude = arr2.includes(10)

let arr3 = [2,2,3]
let index = arr3.indexOf(11)
//console.log(index)

let ObjectArr = [
    {name :"홍길동"},
    {name : "박준영"}
]

//console.log(ObjectArr.indexOf({name :"홍길동"}))

//console.log(ObjectArr.findIndex((item) => item.name === "홍길동"))




// findIndex 모든요소를 순회하면서 콜백함수를 만족하는 특정요소의 인덱스 반환
let arr4 = [1,2,3]
const findIndex = arr4.findIndex((item) => {
    if(item %2 !== 0) return true;
})
//console.log(findIndex)

// find 모든 요소를 순회하면서 콜박함수를 만족하는 요소를 그대로 반환

let arr5 = [
    {name :"홍길동"},
    {name : "박준영"}
]

const finded = arr5.find((item) => (item) => item.name === "홍길동")
console.log(finded)