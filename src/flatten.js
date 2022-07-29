const flatten = (array) => {

    const arr = [];
    const helper =  (array) => {
        for (let i = 0; i < array.length; i++) {
            let element = array[i]
            if (Array.isArray(element)) {
                helper(element)
            } else {
                arr.push(element)
            }
        }
    }
    helper(array)
    return arr
}
console.log(flatten([[1, 2], 3, [4, [[5]]]])); //linear recursion

module.exports = flatten;
