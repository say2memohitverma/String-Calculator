export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  
  let delimiter = ",";
  let numbersString = numbers;
  
  if (numbers.startsWith("//")) {
    const delimiterEndLiteral = numbers.indexOf("\\n");
    const delimiterEndActual = numbers.indexOf("\n");
    
    const delimiterEnd = delimiterEndLiteral !== -1 ? delimiterEndLiteral : delimiterEndActual;
    
    if (delimiterEnd !== -1) {
      delimiter = numbers.substring(2, delimiterEnd);
      
      const newlineLength = delimiterEndLiteral !== -1 ? 2 : 1;
      numbersString = numbers.substring(delimiterEnd + newlineLength);
    }
  }
  
  let normalizedInput = numbersString.replace(/\\n/g, delimiter);
  normalizedInput = normalizedInput.replace(/\n/g, delimiter);
  
  const nums = normalizedInput.split(delimiter).map(n => parseInt(n, 10));
  
  const validNums = nums.filter(n => !isNaN(n));
  
  const negativeNums = validNums.filter(n => n < 0);
  if (negativeNums.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNums.join(',')}`);
  }
  
  return validNums.reduce((sum, num) => sum + num, 0);
}