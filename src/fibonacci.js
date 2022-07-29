// linear recursion O(n^2)
const fibonacci = (num) => {
    if (num === 1 || num === 2){
        return 1
    }
    return fibonacci (num - 1) + fibonacci (num - 2)
}
console.log(fibonacci(10))

// with loop O(n)
const listFibonacci = (num) => {
    let a = 1, b = 1;

    for (let i = 3; i <= num; i++) {
        let c = a + b;
            a = b;
            b = c;

    }
    return b;
  }
  console.log(listFibonacci(10))

module.exports = {listFibonacci, fibonacci};
