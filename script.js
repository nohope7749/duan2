const display = document.getElementById("display");
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
