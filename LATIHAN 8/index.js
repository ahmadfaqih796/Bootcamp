let counter = 0;
let x = setInterval(() => {
    console.log(counter++);
    if(counter > 3) {
        clearInterval(x);
    }
}, 1000)
console.log(x)