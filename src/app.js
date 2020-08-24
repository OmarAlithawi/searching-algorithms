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
    HTML_INDEXE_ELEMENTS_ARRAY[j].textContent = j;
  }

  // Delay for loops
  const delay = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  // Linear search algorithm
  const linearSearch = async (arr, value) => {
    const speed = document.querySelector(".textInputSpeed").value;
    if (value !== "" && speed !== "") {
      LINEAR_SEARCH_BTN.disabled = true;
      SEARCHING_FOR_INPUT.disabled = true;
      BINARY_SEARCH_BTN.disabled = true;
      parseInt(speed);
      for (let i = 0; i < arr.length; i++) {
        const currentHTMLElement = arr[i];
        currentHTMLElement.classList.add("active");
       
        if (currentHTMLElement.textContent == value) {
          LINEAR_SEARCH_BTN.disabled = false;
          SEARCHING_FOR_INPUT.disabled = false;
          BINARY_SEARCH_BTN.disabled = false;
          currentHTMLElement.classList.add('correct');
          return (REASULT.innerHTML = "index of the target = " + i);
        }

        await delay(speed);
        currentHTMLElement.classList.remove("active");
        currentHTMLElement.classList.add("notCorrect");
        HTML_INDEXE_ELEMENTS_ARRAY[i].classList.add("indexElementAnimation");

        if (i === arr.length - 1) {
          REASULT.innerHTML = "Element not found = " + -1;
          LINEAR_SEARCH_BTN.disabled = false;
          SEARCHING_FOR_INPUT.disabled = false;
          BINARY_SEARCH_BTN.disabled = false;
        }
      }
      currentHTMLElement.classList.remove("active");
    } else {
      alert("Please fill all values");
    }
  };

  // Binary search algorithm
  const binarySearch = async (arr, value) => {
    const speed = document.querySelector(".textInputSpeed").value;
    if (value !== "" && speed !== "") {
      LINEAR_SEARCH_BTN.disabled = true;
      SEARCHING_FOR_INPUT.disabled = true;
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
          binarySearchAnimationEnd(end);
        } else {
          start = middle + 1;
          binarySearchAnimationStart(start);
        }

        if (arr[middle].textContent == value) {
          arr[middle].classList.add("active");
          LINEAR_SEARCH_BTN.disabled = false;
          SEARCHING_FOR_INPUT.disabled = false;
          BINARY_SEARCH_BTN.disabled = false;
          HTML_INDEXE_ELEMENTS_ARRAY[middle].classList.add('active');
          return (REASULT.innerHTML = "index of the target = " + middle);
        }
        middle = Math.floor((start + end) / 2);
        if (i === arr.length - 1) {
          LINEAR_SEARCH_BTN.disabled = false;
          SEARCHING_FOR_INPUT.disabled = false;
          BINARY_SEARCH_BTN.disabled = false;
          REASULT.innerHTML = "Element not found = " + -1;
        }
      }
    } else {
      alert("Please fill all values");
    }
  };

  // Binary search animation

  const binarySearchAnimationStart = (endpoint) =>{
    for(let i =0 ; i <endpoint;i++ ){
      HTML_VALUE_ELEMENTS_ARRAY[i].classList.add('notCorrect');
      HTML_INDEXE_ELEMENTS_ARRAY[i].classList.add('indexElementAnimation');
    }

  }

  const binarySearchAnimationEnd = (endpoint) =>{
    for(let i =endpoint+1 ; i <  HTML_VALUE_ELEMENTS_ARRAY.length;i++ ){
      HTML_VALUE_ELEMENTS_ARRAY[i].classList.add('notCorrect');
      HTML_INDEXE_ELEMENTS_ARRAY[i].classList.add('indexElementAnimation');
    }

  }

  // Event Listener
  BINARY_SEARCH_BTN.addEventListener("click", () => {
    for (let i = 0; i < HTML_VALUE_ELEMENTS_ARRAY.length; i++) {
      if (HTML_VALUE_ELEMENTS_ARRAY[i].classList.contains("active")) {
        HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("active");
      }

      if (HTML_VALUE_ELEMENTS_ARRAY[i].classList.contains("notCorrect")) {
        HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("notCorrect");
      }
      if (HTML_VALUE_ELEMENTS_ARRAY[i].classList.contains("correct")) {
        HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("correct");
      }
      if (HTML_INDEXE_ELEMENTS_ARRAY[i].classList.contains("indexElementAnimation")) {
        HTML_INDEXE_ELEMENTS_ARRAY[i].classList.remove("indexElementAnimation");
      }
    }
    binarySearch(HTML_VALUE_ELEMENTS_ARRAY, SEARCHING_FOR_INPUT.value);
  });

  LINEAR_SEARCH_BTN.addEventListener("click", () => {
    for (let i = 0; i < HTML_VALUE_ELEMENTS_ARRAY.length; i++) {
      if (HTML_VALUE_ELEMENTS_ARRAY[i].classList.contains("active")) {
        HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("active");
      }
      
      if (HTML_VALUE_ELEMENTS_ARRAY[i].classList.contains("notCorrect")) {
        HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("notCorrect");
      }
      if (HTML_VALUE_ELEMENTS_ARRAY[i].classList.contains("correct")) {
        HTML_VALUE_ELEMENTS_ARRAY[i].classList.remove("correct");
      }
      if (HTML_INDEXE_ELEMENTS_ARRAY[i].classList.contains("indexElementAnimation")) {
        HTML_INDEXE_ELEMENTS_ARRAY[i].classList.remove("indexElementAnimation");
      }
    }
    linearSearch(HTML_VALUE_ELEMENTS_ARRAY, SEARCHING_FOR_INPUT.value);
  });
})();
