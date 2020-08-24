const disableButtonsAndInputs = () => {
  LINEAR_SEARCH_BTN.disabled = true;
  SEARCHING_FOR_INPUT.disabled = true;
  BINARY_SEARCH_BTN.disabled = true;
};

const ableButtonsAndInputs = () => {
  LINEAR_SEARCH_BTN.disabled = false;
  SEARCHING_FOR_INPUT.disabled = false;
  BINARY_SEARCH_BTN.disabled = false;
};

const removeAllDesignClasses = () => {
  for (let i = 0; i < HTML_VALUE_ELEMENTS_ARRAY.length; i++) {
    HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("active");
    HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("notCorrect");
    HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("correct");
    HTML_INDEX_ELEMENTS_ARRAY[i].classList.remove("indexElementAnimation");
  }
};

// Delay for loops
const delay = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const removeAnimationClass = () => {
  for (let i = 0; i < HTML_INDEX_ELEMENTS_ARRAY.length; i++) {
    HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("notCorrect");
    HTML_INDEX_ELEMENTS_ARRAY[i].classList.remove("indexElementAnimation");
    HTML_INDEX_ELEMENTS_ARRAY[i].classList.remove("active");
  }
};

// Binary search animation
const addAnimationClassBinaryStart = (endpoint) => {
  for (let i = 0; i < endpoint; i++) {
    HTML_VALUE_ELEMENTS_ARRAY[i].classList.add("notCorrect");
    HTML_INDEX_ELEMENTS_ARRAY[i].classList.add("indexElementAnimation");
  }
};

const addAnimationClassBinaryEnd = (endpoint) => {
  for (let i = endpoint + 1; i < HTML_VALUE_ELEMENTS_ARRAY.length; i++) {
    HTML_VALUE_ELEMENTS_ARRAY[i].classList.add("notCorrect");
    HTML_INDEX_ELEMENTS_ARRAY[i].classList.add("indexElementAnimation");
  }
};

const binarySearchConditions = async (
  speed,
  start,
  end,
  middle,
  value,
  arr
) => {
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
      addAnimationClassBinaryEnd(end);
    } else {
      start = middle + 1;
      addAnimationClassBinaryStart(start);
    }

    if (arr[middle].textContent == value) {
      arr[middle].classList.add("active");
      HTML_INDEX_ELEMENTS_ARRAY[middle].classList.add("active");
      ableButtonsAndInputs();
      removeAnimationClass();
      return (REASULT.innerHTML = "index of the target = " + middle);
    }
    middle = Math.floor((start + end) / 2);
    if (start > end) {
      ableButtonsAndInputs();
      removeAnimationClass();
      return (REASULT.innerHTML = "Element not found = " + -1);
    }
  }
};

const linearSearchConditions = async (speed, arr, value) => {
  parseInt(speed);
  for (let i = 0; i < arr.length; i++) {
    const currentHTMLElement = arr[i];
    currentHTMLElement.classList.add("active");

    if (currentHTMLElement.textContent == value) {
      ableButtonsAndInputs();
      currentHTMLElement.classList.add("correct");
      await delay(speed);
      removeAnimationClass();
      return (REASULT.innerHTML = "index of the target = " + i);
    }

    await delay(speed);
    currentHTMLElement.classList.remove("active");
    currentHTMLElement.classList.add("notCorrect");
    HTML_INDEX_ELEMENTS_ARRAY[i].classList.add("indexElementAnimation");

    if (i === arr.length - 1) {
      REASULT.innerHTML = "Element not found = " + -1;
      ableButtonsAndInputs();
      await delay(speed);
      removeAnimationClass();
    }
  }
};
