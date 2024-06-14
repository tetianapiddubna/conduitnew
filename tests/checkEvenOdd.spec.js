import { test, expect } from "@playwright/test";

function checkEvenOdd(number, type) {
    if (typeof number == 'number') {
    if (type === 'even') {
      return number % 2 === 0;
    } else if (type === 'odd') {
      return number % 2 !== 0;
    } else {
      throw Error('Use numbers to verify whether number is odd or even');
    }
  }
}

test('Even number is identified', async () => {
  const result = checkEvenOdd(2, 'even');
  expect(result).toBeTruthy();
});

test('Odd number is identified', async () => {
  const result = checkEvenOdd(1, 'odd');
  expect(result).toBeTruthy();
});


test('checkEvenOdd should correctly identify odd numbers', async () => {
  const result = checkEvenOdd(-1, 'odd');
  expect(result).toBeTruthy();
});


test('Negative number is identified', async () => {
  const result = checkEvenOdd(-1, 'even');
  expect(result).toBeFalsy();
});

test('Non-odd number is identified', async () => {
  const result = checkEvenOdd(4, 'odd');
  expect(result).toBeFalsy();
});

test('Zero is identified', async () => {
  const result = checkEvenOdd(0, 'odd');
  expect(result).toBeFalsy();
});
