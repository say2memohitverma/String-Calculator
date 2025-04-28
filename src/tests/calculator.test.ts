import { add } from '../calculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number itself for a single number input', () => {
    expect(add("1")).toBe(1);
    expect(add("42")).toBe(42);
  });
});