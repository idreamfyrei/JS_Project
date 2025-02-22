const getHeight = document.getElementById("height");
const getWeight = document.getElementById("weight");
const calcBMI = document.getElementById("calculate");
const result = document.getElementById("result");

calcBMI.addEventListener("click", () => {
  const height = parseFloat(getHeight.value) / 100;
  const weight = parseFloat(getWeight.value);

  // check if height and weight are valid
  if (!height || !weight || height <= 0 || weight <= 0) {
    result.innerHTML = "Please Enter Valid Height and Weight";
    return;
  }

  // calculate BMI
  const bmi = weight / (height * height);

  // determine BMI category
  let bmiInfo = "";

  if (bmi < 18.5) {
    bmiInfo = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiInfo = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiInfo = "Overweight";
  } else {
    bmiInfo = "Obesity";
  }

  result.innerText = `Your BMI is ${bmi.toFixed(2)} (${bmiInfo})`;
});
