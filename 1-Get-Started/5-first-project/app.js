const inputText = document.getElementById("goal");
const inputButton = document.querySelector("button");
const ulList = document.querySelector("ul");

inputButton.addEventListener("click", addElement);

function addElement() {
  const createLi = document.createElement("li");
  inputvalue = inputText.value;
  createLi.textContent = inputvalue;
  ulList.appendChild(createLi);
  inputText.value = "";
}
