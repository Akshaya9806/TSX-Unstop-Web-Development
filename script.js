// Log when the page loads
console.log("Page has loaded successfully!");

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    button.addEventListener("click", function () {
        console.log("Button was clicked!");
        alert("You clicked the button!");
    });
});
