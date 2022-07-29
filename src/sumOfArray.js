
const sum = (arr) => {
  const sumOfAllElements = arr.reduce((previous, current) => {
    if (!Array.isArray(arr)) {
      return [];
    }
    return previous + current;
  }, 0);
    return arr.map((currentElement) => sumOfAllElements - currentElement);
}
console.log(sum([3, 7, 8, 2, 4, 1])); // O(n)


module.exports = sum;
