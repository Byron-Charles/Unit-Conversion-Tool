const inputField = document.querySelector(".input-field");
const convertBtn = document.querySelector(".convert-btn");
const lengthInfo = document.querySelector(".length-info");
const volumeInfo = document.querySelector(".volume-info");
const massInfo = document.querySelector(".mass-info");
convertBtn.addEventListener("click", function () {
  let value = inputField.value;
  convertMeasurement(value);
});

function convertMeasurement(num) {
  let meterToFeet = num * 3.281;
  let feetToMeter = num * 0.305;

  let literToGallon = num * 0.264;
  let gallonToLiter = num * 3.785;

  let kgToLbs = num * 2.205;
  let lbsToKg = num * 0.454;

  lengthInfo.textContent = `${num} ${
    num === "1" ? "meter" : "meters"
  } = ${meterToFeet.toFixed(3)} feet |
     ${num} ${num === "1" ? "foot" : "feet"} = ${feetToMeter.toFixed(
    3
  )} meters`;

  volumeInfo.textContent = `${num} ${
    num === "1" ? "liter" : "liters"
  } = ${literToGallon.toFixed(3)} gallons |
     ${num} ${num === "1" ? "gallon" : "gallons"} = ${gallonToLiter.toFixed(
    3
  )} liters`;

  massInfo.textContent = `${num} ${
    num === 1 ? "kilogram" : "kilograms"
  } = ${kgToLbs.toFixed(3)} pounds |
     ${num} ${num === "1" ? "pound" : "pounds"} = ${lbsToKg.toFixed(
    3
  )} kilograms`;
}
