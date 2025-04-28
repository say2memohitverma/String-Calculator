import { add } from '../calculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself for a single number input', () => {
    expect(add("1")).toBe(1);
    expect(add("42")).toBe(42);
  });

  it('should return the sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
    expect(add("10,20")).toBe(30);
  });
});