const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      try {
        display.innerText = eval(display.innerText); // Evaluate the expression safely
      } catch {
        display.innerText = "Error"; // Display error if there's a syntax issue
        setTimeout(() => (display.innerText = ""), 2000); // Clear error message after a few seconds
      }
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000); // Reset display after 2 seconds
    } else {
      display.innerText += item.innerText; // Append button text to display
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  toggleIcon.innerText = isDark ? "🌞" : "🌙"; // Switch icon based on theme
  isDark = !isDark; // Toggle theme state
};
