const COL = document.querySelectorAll(".col-sm");
const INPUT_TARGET = document.querySelector(".textInputValue");
const SPEED = document.querySelector(".textInputSpeed");
const LINEAR_SEARCH_BTN = document.querySelector(".linear");
const BINARY_SEARCH_BTN = document.querySelector(".binary");
const REASULT = document.querySelector(".result");
const ALL_VALUES_ARRAY = document.querySelectorAll(".value");
const ALL_INDEXES_ARRAY = document.querySelectorAll(".index");

const delay = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const linearSearch = async (arr, value, speed) => {
  if (value !== "" && speed !== "") {
    parseInt(speed);
    for (let i = 0; i < arr.length; i++) {
      const currentHTMLElement = arr[i];
      currentHTMLElement.classList.add("active");
      if (currentHTMLElement.textContent == value) {
        REASULT.innerHTML = "index of the target = " + i;
        currentHTMLElement.classList.remove("active");
        return;
      }
      await delay(speed);
      currentHTMLElement.classList.remove("active");
      if (i === arr.length - 1) {
        REASULT.innerHTML = -1;
      }
    }
    currentHTMLElement.classList.remove("active");
  } else {
    alert("Enter all values");
  }
};

LINEAR_SEARCH_BTN.addEventListener("click", () => {
  linearSearch(ALL_VALUES_ARRAY, INPUT_TARGET.value, SPEED.value);
});
