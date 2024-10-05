password.js

function checkPassword() {
    const password = prompt("Enter password:");
    if (password !== "genesis") {
        alert("Incorrect password. Access denied!");
        window.location.href = "Untitled-2.html";
    }
}
