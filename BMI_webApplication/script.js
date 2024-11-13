// Function to calculate BMI and display the result
function calculateBMI(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // Get the user input values
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid values for height and weight.");
        return;
    }

    // Calculate BMI: weight (kg) / height (m)²
    const bmi = weight / (height * height);

    // Display BMI result
    document.getElementById('bmi-value').textContent = bmi.toFixed(2);
    document.getElementById('bmi-result').style.display = 'block'; // Show the result section

    // Show report section
    displayBMIReport(bmi);
}

// Function to display the BMI report based on the calculated BMI
function displayBMIReport(bmi) {
    const reportSection = document.getElementById('generated-report');
    let healthStatus = '';

    if (bmi < 18.5) {
        healthStatus = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        healthStatus = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        healthStatus = 'Overweight';
    } else {
        healthStatus = 'Obesity';
    }

    // Update the report with the BMI status
    reportSection.innerHTML = `<h3>BMI Report:</h3><p>Your BMI is ${bmi.toFixed(2)}. Health status: ${healthStatus}.</p>`;
    reportSection.style.display = 'block'; // Show the report section
}

// Event listener for the form submission
document.getElementById('bmi-form').addEventListener('submit', calculateBMI);
