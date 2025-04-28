export function add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }
    
    let delimiter = ",";
    let numbersString = numbers;
    
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEnd);
      numbersString = numbers.substring(delimiterEnd + 1);
    }
    
    const normalizedInput = numbersString.replace(/\n/g, delimiter);
    
    const nums = normalizedInput.split(delimiter).map(n => parseInt(n, 10));
    return nums.reduce((sum, num) => sum + num, 0);
  }