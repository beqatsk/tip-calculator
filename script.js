const display = document.querySelector(".display");
const numbers = Array.from(document.querySelectorAll(".number"));
const symbols = Array.from(document.querySelectorAll(".symbol"));
const deleteBtn = document.querySelector(".delete");
const reset = document.querySelector(".reset");
const equals = document.querySelector(".equals");

let inputValue = "";

numbers.forEach((item) => {
  item.addEventListener("click", (event) => {
    inputValue += event.target.innerText;
    display.value = inputValue;
  });
});
symbols.forEach((item) => {
  item.addEventListener("click", (event) => {
    inputValue += event.target.innerText.replace("x", "*");
    display.value = inputValue;
  });
});

deleteBtn.addEventListener("click", () => {
  inputValue = inputValue.slice(0, inputValue.length - 1);
  display.value = inputValue;
});

reset.addEventListener("click", () => {
  inputValue = "";
  display.value = inputValue;
});

equals.addEventListener("click", () => {
  inputValue = eval(inputValue).toString();
  display.value = inputValue;
});
