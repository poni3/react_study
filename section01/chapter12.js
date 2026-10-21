function funcA(){
    console.log("test")
}

let varA = funcA;
varA();

let varB= function () { //익명함수
    console.log('functionB');
}

varB();

let varC = (value) => {
    console.log(value)
    return 1 + value;
}
console.log(varC(10));