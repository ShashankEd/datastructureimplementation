//closure

//ex-1
const increment = (counterval) => {
    let counter = counterval;
    const incrementCounter = () => {
        counter+=2;
        console.log("counter is ", counter);
    }
    return incrementCounter;
}

const mycounter = increment(1);
for (let index = 0; index < 8; index++) {
   mycounter()
}
//advantage
//using closure we can achieve data privacy, and incapsulation, as in the above example we can see that no one 
//can access and change the counter variable accidently, it is accessed through a closure 