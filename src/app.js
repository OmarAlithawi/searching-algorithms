const COL = document.querySelectorAll(".col-sm");
const INPUT_TARGET = document.querySelector(".textInputValue");
const LINEAR_SEARCH_BTN = document.querySelector(".linear");
const BINARY_SEARCH_BTN = document.querySelector(".binary");
const REASULT = document.querySelector(".result");
const ALL_VALUES_ARRAY = document.querySelectorAll(".value");
const ALL_INDEXES_ARRAY = document.querySelectorAll(".index");
const NUMBERS_ARRAY = [];

// Filling an array with random numbers
for (let i = 0; i < ALL_VALUES_ARRAY.length; i++) {
  const number = Math.floor(Math.random() * 1000);
  NUMBERS_ARRAY.push(number);
}

// Render random numbers
for (let j = 0; j < ALL_VALUES_ARRAY.length; j++) {
  NUMBERS_ARRAY.sort((a, b) => a - b);
  ALL_VALUES_ARRAY[j].textContent = NUMBERS_ARRAY[j];
  ALL_INDEXES_ARRAY[j].textContent = j;
}

// Delay for loops
const delay = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// Linear search algorithm
const linearSearch = async (arr, value) => {
  const speed = document.querySelector(".textInputSpeed").value;
  LINEAR_SEARCH_BTN.disabled = true;
  INPUT_TARGET.disabled = true;
  BINARY_SEARCH_BTN.disabled = true;
  if (value !== "" && speed !== "") {
    parseInt(speed);
    for (let i = 0; i < arr.length; i++) {
      const currentHTMLElement = arr[i];
      currentHTMLElement.classList.add("active");
      if (currentHTMLElement.textContent == value) {
        LINEAR_SEARCH_BTN.disabled = false;
        INPUT_TARGET.disabled = false;
        BINARY_SEARCH_BTN.disabled = false;
        return (REASULT.innerHTML = "index of the target = " + i);
      }

      await delay(speed);
      currentHTMLElement.classList.remove("active");

      if (i === arr.length - 1) {
        REASULT.innerHTML = "Element not found = " + -1;
        LINEAR_SEARCH_BTN.disabled = false;
        INPUT_TARGET.disabled = false;
        BINARY_SEARCH_BTN.disabled = false;
      }
    }
    currentHTMLElement.classList.remove("active");
  } else {
    alert("Enter all values");
  }
};

// Binary search algorithm
const binarySearch = async (arr, value) => {
  const speed = document.querySelector(".textInputSpeed").value;
  LINEAR_SEARCH_BTN.disabled = true;
  INPUT_TARGET.disabled = true;
  BINARY_SEARCH_BTN.disabled = true;
  parseInt(speed);
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  for (let i = 0; i < arr.length; i++) {
    arr[start].classList.add("start");
    arr[end].classList.add("end");
    arr[middle].classList.add("active");
    await delay(speed);
    arr[start].classList.remove("start");
    arr[end].classList.remove("end");
    arr[middle].classList.remove("active");
    if (value < arr[middle].textContent) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    if (arr[middle].textContent == value) {
      arr[middle].classList.add("active");
      LINEAR_SEARCH_BTN.disabled = false;
      INPUT_TARGET.disabled = false;
      BINARY_SEARCH_BTN.disabled = false;
      return (REASULT.innerHTML = "index of the target = " + middle);
    }
    middle = Math.floor((start + end) / 2);
    if (i === arr.length - 1) {
      LINEAR_SEARCH_BTN.disabled = false;
      INPUT_TARGET.disabled = false;
      BINARY_SEARCH_BTN.disabled = false;
      REASULT.innerHTML = "Element not found = " + -1;
    }
  }
};

// Event Listener
BINARY_SEARCH_BTN.addEventListener("click", () => {
  for (let i = 0; i < ALL_VALUES_ARRAY.length; i++) {
    if (ALL_VALUES_ARRAY[i].classList.contains("active")) {
      ALL_VALUES_ARRAY[i].classList.remove("active");
    }
  }
  binarySearch(ALL_VALUES_ARRAY, INPUT_TARGET.value);
});

LINEAR_SEARCH_BTN.addEventListener("click", () => {
  for (let i = 0; i < ALL_VALUES_ARRAY.length; i++) {
    if (ALL_VALUES_ARRAY[i].classList.contains("active")) {
      ALL_VALUES_ARRAY[i].classList.remove("active");
    }
  }
  linearSearch(ALL_VALUES_ARRAY, INPUT_TARGET.value);
});
