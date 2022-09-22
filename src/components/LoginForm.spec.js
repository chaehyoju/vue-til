import { sum } from './math';

// sum(10, 20);

describe('math.js', () => {
  test('sum', () => {
    const result = sum(10, 20);
    expect(result).toBe(30);
  });
});
