

// promises 

let p1 = new Promise((resolve, reject)=>{
    console.log("this is promise one");
    resolve("hello this is resolve");
    reject("this is reject");
})

p1.then((value)=>{
    console.log(value)
})

p1.catch((error)=>{
    console.log("catch the error")
});