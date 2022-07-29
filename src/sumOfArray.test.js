const sum = require('./sumOfArray');

describe('sum of all elements in array', () => {
    test('sum of array should be [22,18,17,23,21,24]', () => {
        const arr = [3, 7, 8, 2, 4, 1]
        expect(sum(arr)).toEqual([22,18,17,23,21,24])
    })
    test('sum of array should be [18,20,22,14,21,20]', () => {
        const arr = [5, 3, 1, 9, 2, 3]
        expect(sum(arr)).toEqual([18,20,22,14,21,20])
    })

})