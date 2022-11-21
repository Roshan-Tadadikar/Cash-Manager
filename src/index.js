import "./styles.css";

const BillAmount = document.querySelector("#BillAmount");
const CasAmount = document.querySelector("#CashAmount");
const check = document.querySelector("#check");
const msg = document.querySelector("#hide");
const NoofNotes = document.querySelectorAll(".numbernotes");
const disp = document.querySelector("#out");
const hidden = document.querySelector("#hidden");

const notes = [2000, 500, 100, 20, 10, 5, 1];

check.addEventListener("click", function validate() {
  hideMessage();
  hideMessage2();
  if (!isNaN(CasAmount) || !isNaN(BillAmount)) {
    displayMessage("Please enter a number!!");
  }
  if (BillAmount.value > 0) {
    if (CasAmount.value >= BillAmount.value) {
      const retAmount = CasAmount.value - BillAmount.value;
      calculateChange(retAmount);
      displayMessage2(retAmount);
    } else {
      displayMessage("The cas should be atleast equal to the bill amount");
    }
  } else {
    displayMessage("Invalid Bill Amount");
  }
});

function calculateChange(retAmount) {
  for (let i = 0; i < notes.length; i++) {
    const noofNotes = Math.trunc(retAmount / notes[i]);
    retAmount %= notes[i];
    NoofNotes[i].innerText = noofNotes;
  }
}

function hideMessage() {
  hidden.style.display = "none";
}

function hideMessage2() {
  msg.style.display = "none";
}
function displayMessage(message) {
  msg.style.display = "block";
  msg.innerText = message;
}

function displayMessage2(message) {
  hidden.style.display = "block";
  hidden.innerText = message;
}
