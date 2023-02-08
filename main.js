"use strict";
// these are my global variables
// life is good when you have them

// I start with these 2 for the input fields
const input1 = document.querySelector("#firstnumber");
const input2 = document.querySelector("#secondnumber");
// the results field
const resultList = document.querySelector("#results");
// the round click option
const round = document.querySelector("#doround");
// these are the 2 buttons
const calculateButton = document.querySelector("#calculate");
const clearButton = document.querySelector("#clear");

// and these are variables that can take different values
// and can be used in different funtions

let result;

// setting up

// I start with a set-up function that makes the buttons clickable
// and assigns functions to them
function setUp() {
  calculateButton.addEventListener("click", calculate);
  clearButton.addEventListener("click", clear);
}
setUp();

// The calculate function will handle all the math operations
function calculate() {
  // The code needs to read the number typed in the input fileds
  // I use the Number() method to convert each input's value into a number.
  let num1 = Number(input1.value);
  let num2 = Number(input2.value);
  // alterativelly:
  // let num1 = +input1.value; - would be the same thing

  // Then read the math operations from operator menu
  let operator = document.querySelector("#operator").value;
  let resultListItem = document.createElement("li");

  if (operator === "add") {
    result = num1 + num2;
    console.log(result);
  } else if (operator === "sub") {
    result = num1 - num2;
    console.log(result);
  } else if (operator === "mul") {
    result = num1 * num2;
    console.log(result);
  } else if (operator === "div") {
    result = num1 / num2;
    console.log(result);
  }
  // read the value of the round-decimal menu
  let selectedDecimal = document.querySelector("#decimals").value;
  if (round.checked) {
    result = result.toFixed(selectedDecimal);
  }
  // I want the result to appear in the first input so:
  input1.value = result;

  // I also want each result I get to appear as a new li object in the ul "results"
  // so I create a variable that creates a list element

  // and I modify its text content to be whatever the new result is
  resultListItem.textContent = result;
  // now I need to append each li I create to the list so:
  resultList.appendChild(resultListItem);

  // I need to always be able able to see my latest result in the list
  // and I need to be able to scroll on the list through all the results

  // So what I want is to be able to scroll from the top of the list to
  // however long the list is.

  // The scrollTop property gets the amount of pixels that an element's
  // content is auto scrolled vertically. The value it gets is the amount of pixels
  // starting from the top to bottom.
  // And this is what makes my latest result(li) in my result list (ul) visible
  // because the code auto scrolls to the bottom of the result list's content

  // scrollHeight is a javascript method and it is the measurement of the height of an element's
  // content, including the content which is not visible on the screen due to overflow.
  console.log(resultList.scrollHeight);
  resultList.scrollTop = resultList.scrollHeight;
}

// The clear function will clear the result list
function clear() {
  // the following is a small loop that removes a child (li) in the resutlist (ul)
  // and it repeats doing so for as long as there are children in the resultlist.
  // while (resultList.firstChild) {
  //   resultList.removeChild(resultList.firstChild);
  // }

  // or I can just get all the children of the resultlist (ul) with innerHTML and
  // give them a value of an emty string.
  resultList.innerHTML = "";
}
