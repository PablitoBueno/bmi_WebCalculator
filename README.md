# BMI Calculator Web Application

A simple web application to calculate Body Mass Index (BMI) based on user input for height and weight. It displays the BMI value along with a health status report to categorize the result as underweight, normal, overweight, or obese.

## Features

- **Calculate BMI**: Accepts height and weight inputs, validates them, calculates the BMI, and displays the result.
- **Health Report**: Generates a report on health status based on BMI categories (Underweight, Normal, Overweight, Obesity).
- **User-Friendly UI**: Clean interface with centered input fields, user feedback, and responsive design.

## Project Structure

- **HTML** (`index.html`): Structure of the input form, BMI result, and report sections.
- **CSS** (`styles.css`): Styling for layout, colors, and responsive alignment.
- **JavaScript** (`script.js`): Functionality for BMI calculation, validation, and report generation.

## Code Overview

### Functions

- **`calculateBMI(event)`**
  - Fetches user input, validates height and weight, calculates BMI, and displays the result.
  - Formula:  
    ```plaintext
    BMI = weight (kg) / height (m)^2
    ```
- **`displayBMIReport(bmi)`**
  - Analyzes BMI to determine health status and displays a customized report:
    - Underweight
    - Normal weight
    - Overweight
    - Obesity

### Event Listener
- **Form Submission**:  
  Triggers `calculateBMI` on form submission, preventing page reload and dynamically showing results.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bmi-calculator-web-app.git
   cd bmi-calculator-web-app
   
2. Open index.html in a web browser to run the application.


3. Enter your height (in cm) and weight (in kg), then click Calculate BMI.
