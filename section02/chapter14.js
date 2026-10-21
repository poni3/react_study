const promise = new Promise(() => {

  
    setTimeout(() => {
        console.log('hi!')
    }, 20000);

})

console.log(promise)