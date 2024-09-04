![Screenshot_20240831_232952](https://github.com/user-attachments/assets/54d6f50a-457a-46b9-95e5-9bf81b37d036)

# Web-based Calculator Application

This project is a simple yet functional web-based calculator application. It provides basic arithmetic operations with a clean, responsive user interface.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Responsive design that works on various screen sizes
- Clear button to reset calculations
- Backspace functionality to correct input
- Error handling for division by zero
- Decimal point support for floating-point calculations

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

## Project Structure

- `index.html`: The main HTML file that structures the calculator layout
- `style.css`: Contains all the styling for the calculator, including layout and button designs
- `script.js`: Handles the calculator's functionality, including number input, operations, and result display

## How to Use

1. Open the `index.html` file in a web browser.
2. Use the number buttons to input your desired numbers.
3. Click on the operation buttons (+, -, *, /) to perform calculations.
4. Press the equals (=) button to see the result.
5. Use the AC button to clear the calculator.
6. Use the back button to delete the last input.

## Key Functions

- `operate(a, b, operand)`: Performs the selected operation on two numbers
- `clickNumber(num)`: Handles number button clicks
- `processOperator(operator)`: Processes arithmetic operations
- `clickEquals()`: Calculates and displays the final result
- `clear()`: Resets the calculator
- `clickBack()`: Removes the last entered digit

## Styling

The calculator features a modern design with:
- A blue color scheme
- Rounded corners for a softer appearance
- Hover effects on buttons for better user interaction
- A large, easy-to-read display screen

## Future Enhancements

Potential improvements for the future:
- Add more advanced mathematical operations (square root, exponents, etc.)
- Implement keyboard support for number and operation inputs
- Add a history feature to review past calculations
- Improve error handling and edge case management

