/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from "./lib/helpers.js";
import { longest } from "./lib/longest.JS";
import { shortest } from "./lib/shortest.JS";
import { reverse } from "./lib/reverse.JS";
import { palindrome } from "./lib/palindrome.js";
import { vowels } from "./lib/vowels.js";
import { consonants } from "./lib/consonants.js";

const test = isString("hæ");
console.log("test er strengur?", test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

function DMN() {
  const textAreaElement = document.querySelector("textarea");
  const formElement = document.querySelector("form");
  const outputDiv = document.querySelector(".output");

  let isSubmitted = false;

  function submitHandler(event) {
    event.preventDefault();
    const inputString = textAreaElement.value.trim();

    if (inputString === "") {
      alert("Vinsamlegast settu inn streng");
      return;
    }
    isSubmitted = true;

    breytaStreng(inputString);
  }

  function rejectHandler(event) {
    document.querySelector("#string").value = "";
    outputDiv.classList.add("hidden");
    isSubmitted = false;
  }

  function breytaStreng(inputString) {
    document.querySelector(".input").textContent = inputString;
    document.querySelector(".longest").textContent = longest(inputString);
    document.querySelector(".shortest").textContent = shortest(inputString);
    document.querySelector(".vowels").textContent = vowels(inputString);
    document.querySelector(".consonants").textContent = consonants(inputString);
    document.querySelector(".palindrome").textContent = palindrome(inputString)
      ? ""
      : "ekki ";
    document.querySelector(".reversed").textContent = reverse(inputString);
    outputDiv.classList.remove("hidden");
  }

  function update() {
    const inputString = textAreaElement.value.trim();

    if (inputString !== "" && isSubmitted === true) {
      breytaStreng(inputString);
    } else {
      outputDiv.classList.add("hidden");
    }
  }

  formElement.addEventListener("submit", submitHandler);
  formElement.addEventListener("reset", rejectHandler);
  textAreaElement.addEventListener("input", update);
}
document.addEventListener("DOMContentLoaded", DMN);
