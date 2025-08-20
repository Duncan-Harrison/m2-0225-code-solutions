import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('Returns a new array that only contains the even numbers of the original array', () => {
    const numbers: number[] = [19, 34, 99];
    const result = evenNumbers(numbers);
    // expect(true).toBe(false);
    expect(result).toEqual([34]);
  });
});

describe('toDollars', () => {
  it('Returns a number formatted in dollars and cents.', () => {
    const price = 5.3993;
    const result = toDollars(price);
    //  expect(true).toBe(false);
    expect(result).toEqual('$5.40');
  });
});

describe('divideBy', () => {
  it('Returns a new array of numbers where every entry has been divided by the given divisor without changing the original array.', () => {
    const numbers = [33, 66, 99];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    // expect(true).toBe(false);
    expect(result).toEqual([11, 22, 33]);
    expect(numbers).toEqual([33, 66, 99]);
  });
});

describe('multiplyBy', () => {
  it('Modifies an object by multiplying the value of each key, but only if that value is a number', () => {
    const obj = { foo: 'Paisley', bar: 22 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ foo: 'Paisley', bar: 44 });
  });
});
