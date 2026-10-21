let arr = [1,2,3]

for(let i = 0; i<arr.length; i++){
   // console.log(arr[i])
}

let arr2 = [4,5,6,7,8]
for(let i = 0; i<arr2.length; i++){
   // console.log(arr2[i])
}

for(let item of arr) {
    // console.log(item)
}

let person = {
    name :"박준영",
    age : 40,
    hobby: "수영"
}

let keys = Object.keys(person);
for(let i=0; i< keys.length;i++){
    console.log(person[keys[i]])
}

for(let key of keys) {
    const value = person[key];
     console.log(key, value)
}

let values = Object.values(person)

for(let value of values) {
     console.log(value)
}

for(let key in person){
    const value = person[key];
    console.log(key, value)
}

