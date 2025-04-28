# String Calculator TDD Kata

A Test-Driven Development implementation of a String Calculator, created as part of the Incubyte TDD Assessment.

## Project Overview

This project implements a String Calculator with the following features:
- Takes a string of comma-separated numbers and returns their sum
- Handles empty strings, single numbers, and multiple numbers
- Supports newlines as alternative delimiters
- Allows custom delimiters defined at the beginning of the input string
- Rejects negative numbers with appropriate error messages
- Provides a clean, user-friendly web interface

## Technologies Used

- TypeScript
- Jest (for testing)
- React (for UI)
- Webpack (for bundling)

## TDD Approach

This project was built following strict Test-Driven Development principles:

1. Write a failing test for a small piece of functionality
2. Implement the minimal code needed to make the test pass
3. Refactor the code while keeping the tests passing
4. Repeat with the next piece of functionality

Each commit in the repository represents a step in this cycle, clearly showing how the code evolved through the TDD process.

## Setup Instructions

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd string-calculator
   ```

2. Install dependencies
   ```bash
   npm install
   ```

## Running Tests

Run the tests once:
```bash
npm test
```

Run the tests in watch mode (for development):
```bash
npm run test:watch
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open automatically in your default browser at `http://localhost:3000`.

## Building for Production

Create a production build:
```bash
npm run build
```

The compiled files will be in the `dist` directory.

## Features Implemented

### 1. Basic String Calculator
- Returns 0 for an empty string
- Returns the number itself for a single number
- Returns the sum for comma-separated numbers

### 2. Advanced Delimiter Support
- Handles newlines as delimiters (e.g., "1\n2,3" returns 6)
- Supports custom delimiters (e.g., "//;\n1;2;3" returns 6)
- Handles literal "\n" characters in both custom delimiter definitions and number input

### 3. Input Validation
- Throws an exception for negative numbers
- Shows all negative numbers in the exception message

### 4. User Interface
- Clean, user-friendly web interface
- Input field for entering numbers
- Clear examples demonstrating all supported formats
- Dynamic result display

## Example Usage

The calculator accepts inputs in the following formats:

- `""` → Returns 0
- `"1"` → Returns 1
- `"1,2,3"` → Returns 6
- `"1\n2,3"` → Returns 6 (newline as delimiter)
- `"//;\n1;2;3"` → Returns 6 (semicolon as custom delimiter)

## Error Handling

- Input with negative numbers: `"1,-2,3,-4"` → Throws `"negative numbers not allowed: -2,-4"`

## Additional Notes

The calculator implements all the requirements specified in the Incubyte TDD Assessment. Special attention was paid to:

- Code readability and maintainability
- Comprehensive test coverage
- Clean, intuitive user interface
- Proper error handling

Each step of development followed strict TDD principles, with frequent commits demonstrating the evolution of the codebase through the Red-Green-Refactor cycle.
