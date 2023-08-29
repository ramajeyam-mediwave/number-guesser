const generateBtn = document.querySelector("#generate-btn");
const resultDiv = document.querySelector("#guessed-number");

function guessNumber() {
  const number = Math.random() * 1000;
  const numberWithoutDecimal = Math.floor(number);
  //   console.log(numberWithoutDecimal);
  resultDiv.innerText = numberWithoutDecimal;
}

generateBtn.addEventListener("click", function () {
  guessNumber();
});
