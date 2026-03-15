
// Get the form and success message elements
const studentForm = document.getElementById("studentForm");
const successMessage = document.getElementById("success-message");

// Validate email format using regex
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Show or hide error messages for form fields
function toggleError(inputId, errorId, isInvalid) {
    const inputField = document.getElementById(inputId);
    const errorSpan = document.getElementById(errorId);
    if (isInvalid) {
        errorSpan.style.display = "block";
        inputField.classList.add("input-error");
    } else {
        errorSpan.style.display = "none";
        inputField.classList.remove("input-error");
    }
}

// Handle form submission and validate all fields
studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get and trim input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    let isValid = true;
    // Validate each field and show errors if needed
    if (firstName === "") { toggleError("firstName", "firstNameError", true); isValid = false; }
    else { toggleError("firstName", "firstNameError", false); }
    if (lastName === "") { toggleError("lastName", "lastNameError", true); isValid = false; }
    else { toggleError("lastName", "lastNameError", false); }
    if (!validateEmail(email)) { toggleError("email", "emailError", true); isValid = false; }
    else { toggleError("email", "emailError", false); }
    if (password.length < 8) { toggleError("password", "passwordError", true); isValid = false; }
    else { toggleError("password", "passwordError", false); }
    if (studentId < 10000 || studentId > 99999) { toggleError("studentId", "studentIdError", true); isValid = false; }
    else { toggleError("studentId", "studentIdError", false); }
    // If all fields are valid, show success message
    if (isValid) {
        studentForm.style.display = "none";
        successMessage.classList.remove("hidden");
        studentForm.reset();
    }
});

// Real-time validation for email field
document.getElementById("email").addEventListener("blur", () => {
    const email = document.getElementById("email").value.trim();
    toggleError("email", "emailError", !validateEmail(email));
});

// Real-time validation for student ID field
document.getElementById("studentId").addEventListener("input", () => {
    const id = document.getElementById("studentId").value;
    toggleError("studentId", "studentIdError", (id < 10000 || id > 99999));
});