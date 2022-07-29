const flatten = require('./flatten');

test(' array should be [1,2,3,4,5]', () => {
    const array = [[1, 2], 3, [4, [[5]]]];
    expect(flatten(array)).toEqual([1,2,3,4,5])
})
