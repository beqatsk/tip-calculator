const display = document.querySelector(".display");
const numbers = Array.from(document.querySelectorAll(".number"));
const symbols = Array.from(document.querySelectorAll(".symbol"));
const deleteBtn = document.querySelector(".delete");
const reset = document.querySelector(".reset");
const equals = document.querySelector(".equals");

let displayInput = [];
let inputValue = 0;
let buttonValue = 0;

display.addEventListener("input", (event) => {
  inputValue = Number(event.target.value);
  displayInput.push(inputValue);
  console.log(displayInput);
});

numbers.forEach((item) => {
  item.addEventListener("click", (event) => {
    buttonValue = Number(event.target.innerText);
    displayInput.push(buttonValue);
    // console.log(displayInput);
  });
});
symbols.forEach((item) => {
  item.addEventListener("click", (event) => {
    buttonValue = Number(event.target.innerText);
    displayInput.push(buttonValue);
    //console.log(buttonValue);
  });
});

deleteBtn.addEventListener("click", () => {
  displayInput.pop();
  // console.log(displayInput);
});

reset.addEventListener("click", () => {
  displayInput = [];
  console.log(displayInput);
});

equals.addEventListener("click", () => {
  displayInput = eval(displayInput);
});
