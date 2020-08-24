(() => {
  // Filling an array with random numbers
  for (let i = 0; i < HTML_VALUE_ELEMENTS_ARRAY.length; i++) {
    const number = Math.floor(Math.random() * 1000);
    NUMBERS_ARRAY.push(number);
  }

  // Render random numbers
  for (let j = 0; j < HTML_VALUE_ELEMENTS_ARRAY.length; j++) {
    NUMBERS_ARRAY.sort((a, b) => a - b);
    HTML_VALUE_ELEMENTS_ARRAY[j].textContent = NUMBERS_ARRAY[j];
    HTML_INDEX_ELEMENTS_ARRAY[j].textContent = j;
  }

  // Linear search algorithm
  const linearSearch = (arr, value) => {
    const speed = document.querySelector(".textInputSpeed").value;
    if (value !== "" && speed !== "") {
      disableButtonsAndInputs();
      linearSearchConditions(speed, arr, value);
    } else {
      alert("Please fill all values");
    }
  };

  // Binary search algorithm
  const binarySearch = (arr, value) => {
    const speed = document.querySelector(".textInputSpeed").value;
    if (value !== "" && speed !== "") {
      disableButtonsAndInputs();
      parseInt(speed);
      let start = 0;
      let end = arr.length - 1;
      let middle = Math.floor((start + end) / 2);
      binarySearchConditions(speed, start, end, middle, value, arr);
    } else {
      alert("Please fill all values");
    }
  };

  // Event Listener
  BINARY_SEARCH_BTN.addEventListener("click", () => {
    removeAllDesignClasses();
    binarySearch(HTML_VALUE_ELEMENTS_ARRAY, SEARCHING_FOR_INPUT.value);
  });

  LINEAR_SEARCH_BTN.addEventListener("click", () => {
    removeAllDesignClasses();
    linearSearch(HTML_VALUE_ELEMENTS_ARRAY, SEARCHING_FOR_INPUT.value);
  });
})();
