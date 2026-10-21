let date1 = new Date();

console.log(date1)

let date2 = new Date("1997/01/07/10:10:07");
console.log(date2)

let date22 = new Date("1997,1,7,23,59,59");
console.log(date22)

//타임스탬프
let ts1 = date1.getTime();
console.log(ts1)

let date4 = new Date(1791872911684);
console.log(date4)

let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();