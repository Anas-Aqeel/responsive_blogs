var columnOne = document.getElementById("columnOne");
var columnTwo = document.getElementById("columnTwo");
var columnThree = document.getElementById("columnThree");
var insert = document.getElementById("insert");
var content = document.getElementsByClassName("main-content");
let element = content.length;
const round = element;
if (element % 3 == 0) {
  for (let i = 0; i < element / 3; i++) {
    columnOne.insertAdjacentHTML(
      "beforeend",
      `<div class='main-content'>${content[i].innerHTML}<div/>`
    );
    columnTwo.insertAdjacentHTML(
      "afterbegin",
      `<div class='main-content'>${content[i + element / 3].innerHTML}<div/>`
    );
    columnThree.insertAdjacentHTML(
      "beforeend",
      `<div class='main-content'>${
        content[i + (element / 3) * 2].innerHTML
      }<div/>`
    );
  }
} else if (element % 2 == 0) {
  for (let i = 0; i < (round + 1) / 3; i++) {
    columnOne.insertAdjacentHTML(
      "afterbegin",
      `<div class='main-content'>${content[i].innerHTML}<div/>`
    );
  }
  for (let j = 0; j < (round - 2) / 3; j++) {
    columnTwo.insertAdjacentHTML(
      "beforeend",
      `<div class='main-content'>${
        content[j + (round + 1) / 3].innerHTML
      }<div/>`
    );
    columnThree.insertAdjacentHTML(
      "beforeend",
      `<div class='main-content'>${
        content[j + (round + 1) / 3 + (round - 2) / 3].innerHTML
      }<div/>`
    );
  }
} else {
  for (let i = 0; i < (round + 2) / 3; i++) {
    columnOne.insertAdjacentHTML(
      "afterbegin",
      `<div class='main-content'>${content[i].innerHTML}<div/>`
    );
  }
  for (let j = 0; j < (round - 1) / 3; j++) {
    columnTwo.insertAdjacentHTML(
      "beforeend",
      `<div class='main-content'>${
        content[j + (round + 2) / 3].innerHTML
      }<div/>`
    );
    columnThree.insertAdjacentHTML(
      "beforeend",
      `<div class='main-content'>${
        content[(round + 2) / 3 + (round - 1) / 3 + j].innerHTML
      }<div/>`
    );
  }
}
let responsiveArray = [];
function myFunction(x) {
  if (x.matches) {
    for (let i = 0; i < content.length; i++) {
      if (content[i].parentNode.id === "columnThree") {
        responsiveArray.push(content[i]);
      }
    }
    if (responsiveArray.length % 2 == 0) {
      for (let i = 0; i < responsiveArray.length / 2; i++) {
        columnOne.insertAdjacentHTML(
          "afterbegin",
          `<div class='main-content'>${responsiveArray[i].innerHTML}<div/>`
        );
        columnTwo.insertAdjacentHTML(
          "afterbegin",
          `<div class='main-content'>${responsiveArray[i].innerHTML}<div/>`
        );
      }
    } else {
      for (let i = 0; i < (responsiveArray.length + 1) / 2; i++) {
        columnOne.insertAdjacentHTML(
          "afterbegin",
          `<div class='main-content'>${responsiveArray[i].innerHTML}<div/>`
        );
      }
      for (let i = 0; i < (responsiveArray.length - 1) / 2; i++) {
        columnTwo.insertAdjacentHTML(
          "afterbegin",
          `<div class='main-content'>${responsiveArray[i].innerHTML}<div/>`
        );
      }
    }
    columnThree.style.display = "none";
  } else {
    columnThree.style.display = "flex";
  }
}

var x = window.matchMedia("(max-width: 1087px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);
