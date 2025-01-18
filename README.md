# Calculator App

## Overview

This is a simple calculator app built with React that performs basic arithmetic operations: addition, subtraction, multiplication, and division. The app maintains a running result and allows users to reset the input or the result independently.

---

## Features

- Perform basic arithmetic operations:  
  - **Addition**  
  - **Subtraction**  
  - **Multiplication**  
  - **Division** (with validation to prevent division by zero)
- Reset functionality:  
  - **Reset Input** clears the current input field.  
  - **Reset Result** resets the calculated result to zero.  
- User-friendly interface with input validation.

---

## How It Works

### Functionality

1. **User Input**  
   - Enter a number in the input field.  

2. **Operations**  
   - Click one of the operation buttons (**Add**, **Subtract**, **Multiply**, or **Divide**) to operate on the current result using the entered input.  

3. **Validation**  
   - Ensures that the input is a valid number.  
   - Displays an alert if the user attempts to divide by zero.  

4. **Reset Buttons**  
   - **Reset Input** clears the input field without affecting the result.  
   - **Reset Result** sets the result back to zero while keeping the input unchanged.  

### State Management

- **`input`**: Tracks the value entered in the input field.  
- **`result`**: Maintains the running total of the calculations.

---

## Code Structure

### Main Component: `Calculator`
- **State Variables**:  
  - `input`: Tracks the user’s input.  
  - `result`: Stores the cumulative calculation result.  

- **Functions**:  
  - `handleOperation`: Handles arithmetic operations and updates the result.  
  - `resetInput`: Clears the input field.  
  - `resetResult`: Resets the result to zero.

- **User Interface**:  
  - Displays the current result.  
  - Provides buttons for operations and reset actions.

---
