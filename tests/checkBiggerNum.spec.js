import {test, expect} from "@playwright/test";

function findBiggerNumber(a, b) {
    if (typeof a === 'number' || typeof b === 'number') {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  throw Error('Both inputs must be numbers');
}

  test('Should return the larger number', async ({}) => {
    const largerNumber = findBiggerNumber(5, 10);
    expect(largerNumber).toBe(10);
  });
  
  test('Should handle negative numbers', async ({}) => {
    const largerNumber = findBiggerNumber(-3, 0);
    expect(largerNumber).toBe(0);
  });
  
  test('Should return either number if they are equal', async ({}) => {
    const largerNumber1 = findBiggerNumber(5, 5);
    expect(largerNumber1).toBe(5);
  
    const largerNumber2 = findBiggerNumber(-1, -1);
    expect(largerNumber2).toBe(-1);
  });