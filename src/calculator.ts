export function add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    
    const normalizedInput = numbers.replace(/\n/g, ",");
    const nums = normalizedInput.split(",").map(n => parseInt(n, 10));
    return nums.reduce((sum, num) => sum + num, 0);
  }