/*
  let seven = document.getElementById("seven"); // seven button
  let eight = document.getElementById("eight"); // eight button
  let nine = document.getElementById("nine");   // nine button
  let four = document.getElementById("four");   // four button
  let five = document.getElementById("five");   // five button
  let six = document.getElementById("six");     // six button
  let one = document.getElementById("one");     // one button
  let two = document.getElementById("two");     // two button
  let three = document.getElementById("three"); // three button
 */

  let multiply = document.getElementById("multiply"); // multiply button
  let add = document.getElementById("add");       // add button
  let zone;
  let equals = document.getElementById("equals"); // Used to calculate calculations
  let subtract = document.getElementById("subtract"); // subtract button
  let divide = document.getElementById("divide"); // divide button
  let outputScreen = document.getElementById("outputs");  // output screen
  outputScreen.style.fontSize = "2em"; // Getting font-size of element

  add.addEventListener("click", () => {
    let clickCount = 0;
    let addScreen = " ";
    clickCount++;
    if(clickCount > 1) {
      addScreen += " ";
    }
    else {
        addScreen += " + ";
    }
    outputScreen.innerHTML = outputScreen.innerHTML + addScreen;
  });

  subtract.addEventListener("click", () => {
    let clickCount = 0;
    let subtractScreen = " ";
    clickCount++;
    if(clickCount > 1) {
      subtractScreen += " ";
    }
    else {
      subtractScreen  += " - ";
    }
    outputScreen.innerHTML = outputScreen.innerHTML + subtractScreen;
  });

  multiply.addEventListener("click", () => {
    let clickCount = 0;
    let multiplyScreen = " ";
    clickCount++;
    if(clickCount > 1) {
      multiplyScreen += " ";
    }
    else {
      multiplyScreen += " * ";
    }
    outputScreen.innerHTML =  outputScreen.innerHTML + multiplyScreen;
  });

  divide.addEventListener("click", () => {
    let clickCount = 0;
    let divideScreen = " ";
    clickCount++;
    if(clickCount > 1) {
      divideScreen += " ";
    }
    else {
      divideScreen  += " / ";
    }
    outputScreen.innerHTML = outputScreen.innerHTML + divideScreen;
  });

  equals.addEventListener("click", () => {
      let result;
      result = Function("return " + outputScreen.innerHTML)();
      outputScreen.textContent = result;
  });


  function displaySeven() {
    outputScreen.textContent += 7;
  }

  function displayEight() {
    outputScreen.textContent += 8;
  }

  function displayNine() {
    outputScreen.textContent += 9;
  }

  function displayFour() {
    outputScreen.textContent += 4;
  }

  function displayFive() {
    outputScreen.textContent += 5;
  }

  function displaySix() {
    outputScreen.textContent += 6;
  }

  function displayOne() {
    outputScreen.textContent += 1;
  }

  function displayTwo() {
    outputScreen.textContent += 2;
  }

  function displayThree() {
    outputScreen.textContent += 3;
  }

  function displayZero() {
    outputScreen.textContent += 0;
  }


  function displayPeriod() {
    outputScreen.textContent += ".";
  }

  function clearScr() {
    outputScreen.textContent = " ";
  }
