// Created by: Parsa Tahavori
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-UNIT5-2-/sw.js", {
    scope: "/ICS20-UNIT5-2-/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const radioButton1 = document.getElementById("option-1").checked

  if (radioButton1 == true) {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    document.getElementById("value").innerHTML =
      "you picked option positive. your number is " + randomNumber + "."
  } else {
    const randomNegativeNumber = Math.floor(Math.random() * -6) + -1

    document.getElementById("value").innerHTML =
      "you picked option negative. your number is " + randomNegativeNumber + "."
  }
}
