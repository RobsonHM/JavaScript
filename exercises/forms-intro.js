// Helper validation functions
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function validateStudentId(studentId) {
    return studentId >= 10000 && studentId <= 99999;
}

const formStudentReg = document.getElementById("myBigForm");

formStudentReg.addEventListener("submit", e => {
    e.preventDefault();

    // Get and trim all input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const studentId = document.getElementById("studentId").value.trim();

    let isValid = true;

    // First Name validation
    if (firstName === "") {
        document.getElementById("firstNameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("firstNameError").style.display = "none";
    }

    // Last Name validation
    if (lastName === "") {
        document.getElementById("lastNameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("lastNameError").style.display = "none";
    }

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Password validation
    if (!validatePassword(password)) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // Student ID validation
    if (!validateStudentId(Number(studentId))) {
        document.getElementById("studentIdError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("studentIdError").style.display = "none";
    }

    // If valid, process the data
    if (isValid) {
        console.log(`Welcome, ${firstName} ${lastName}!`);
        formStudentReg.reset();
    }
});

// BLUR: Listener to check email format after user clicks away
document.getElementById("email").addEventListener("blur", () => {
    const email = document.getElementById("email").value.trim();
    if (!validateEmail(email)) {
        document.getElementById("emailError").style.display = "block";
    } else {
        document.getElementById("emailError").style.display = "none";
    }
});

// INPUT: Checks user's input on every keystroke and provides instant feedback
document.getElementById("studentId").addEventListener("input", () => {
    const studentId = document.getElementById("studentId").value.trim();
    if (!validateStudentId(Number(studentId))) {
        document.getElementById("studentIdError").style.display = "block";
    } else {
        document.getElementById("studentIdError").style.display = "none";
    }
});

// Listen for keystrokes anywhere on the page
document.addEventListener("keydown", e => {
    // Check which key was pressed and if Ctrl/Cmd is held
    if (e.key === "Escape") {
        // Clear all forms on Escape
        document.querySelectorAll("form").forEach(form => form.reset());
        console.log("All fields cleared via Escape key.");
    }
    // Ctrl+Enter to submit (useful for long forms)
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        const activeForm = document.querySelector("form:focus-within");
        if (activeForm) {
            activeForm.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
        }
    }
});