const {fibonacci, listFibonacci} = require('./fibonacci');

describe('fibbonacci functions', () => {
    test('fibonacci recursion ', () => {
        const num = 10;
      expect(fibonacci(num)).toEqual(55)
    });
  
    test('fibonacci with loop', () => {
        const num = 10;
      expect(listFibonacci(num)).toEqual(55) 
    });
  });