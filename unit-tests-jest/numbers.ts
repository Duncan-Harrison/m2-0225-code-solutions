/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  const newAmount = Math.ceil(amount * 100) / 100;
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(newAmount);
  return `${price}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  const results: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    results.push(numbers[i] / divisor);
  }
  return results;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
export function multiplyBy(
  obj: Record<string, unknown>,
  multiplier: number
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  Object.entries(obj).forEach(([key, value]) => {
    typeof value === 'number'
      ? (result[key] = Number(value) * multiplier)
      : (result[key] = value);
  });
  return result;
}
