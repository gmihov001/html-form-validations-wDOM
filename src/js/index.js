/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

const validate = e => {
  e.preventDefault();
  var errorBox = document.querySelector(".alert");
  !errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
  errorBox.innerHTML = "";

  document
    .querySelectorAll("input")
    .forEach(inp => inp.classList.remove("is-invalid"));

  var accountField = document.querySelector("#exampleAccount");
  var cvcField = document.querySelector("#exampleCvc");
  var amountField = document.querySelector("#exampleAmount");
  var nameField = document.querySelector("#exampleFirst");
  var lastField = document.querySelector("#exampleLast");
  var cityField = document.querySelector("#exampleCity");
  var stateField = document.querySelector("#exampleState");
  var postalField = document.querySelector("#exampleZip");

  if (accountField.value < 1000000000000000) {
    //16 numbers
    addError("Credit Card number is invalid, it must be 16 digits long.");
    accountField.classList.add("is-invalid");
  }

  if (cvcField.value.length < 3) {
    addError("CVC number is invalid, it must be 3 digits long.");
    cvcField.classList.add("is-invalid");
  }

  if (amountField.value < 1) {
    addError("Invalid amount value.");
    amountField.classList.add("is-invalid");
  }

  if (nameField.value.length < 2) {
    addError("Invalid name.");
    nameField.classList.add("is-invalid");
  }

  if (lastField.value.length < 2) {
    addError("Invalid last name.");
    accountField.classList.add("is-invalid");
  }

  if (cityField.value.length < 2) {
    addError("Invalid city name.");
    cityField.classList.add("is-invalid");
  }

  if (stateField.value === "Pick a state") {
    addError("Invalid state picked.");
    stateField.classList.add("is-invalid");
  }

  if (postalField.value.length < 5) {
    addError("Invalid Postal code.");
    postalField.classList.add("is-invalid");
  }
};

const addError = message => {
  var errorBox = document.querySelector(".alert");
  errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
  errorBox.innerHTML += `<p>${message}<p>`;
};

document.querySelector("#theForm").addEventListener("submit", validate);
