//1. filter 기존 배열 조건 만족 필터링해서 새로운 배열 생성

let arr1 = [
    {name :"홍길동", hobby:"테니스"},
    {name :"박준영", hobby:"수영"},
    {name :"맹주혜", hobby:"테니스"},
]

const tennisPeople = arr1.filter((item) => item.hobby === "테니스")
//console.log(tennisPeople)

let arr2 = [1,2,3]
const resultArr = arr2.map((item, idx, arr) => {
   return item * 2
})

//console.log(resultArr)

let names = arr1.map((item) => item.name);
//console.log(names)

//3. sort

let arr3 = [10, 3, 5];
arr3.sort((a,b) => {
    if(a > b){
        //b가 a 앞에와라
        return -1;
    }else if(a < b){
        //a가 b앞에
        return 1;
    } else {
        // 자리 이동 x
        return 0;
    }
});
//console.log(arr3)

// toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorteds = arr5.toSorted();

console.log(arr5)
console.log(sorteds)

let arr6 = ["hi", "im", "winterlood"];
const joinStr = arr6.join(' ');
console.log(joinStr)