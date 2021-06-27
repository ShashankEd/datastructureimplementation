const getFibo = (num) => {
    if(num <= 1) {
        return 1;
    } else {
        return getFibo(num-1) + getFibo(num-2)
    }
}
console.log(getFibo(10)); 