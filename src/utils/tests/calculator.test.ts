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

  it('should handle multiple numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("10,20,30,40")).toBe(100);
  });

  it('should handle newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
  });

  it('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n1|2|3")).toBe(6);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => add("-1,2")).toThrow("negative numbers not allowed: -1");
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
  });
});