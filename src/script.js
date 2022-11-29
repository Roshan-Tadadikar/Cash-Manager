
const BillAmount = document.querySelector("#BillAmount");
const CasAmount = document.querySelector("#CashAmount");
const check = document.querySelector("#check");
const msg = document.querySelector("#hide");
const NoofNotes = document.querySelectorAll(".numbernotes");
const disp = document.querySelector("#out");
// const disp = document.querySelector("#disp");

const notes = [2000, 500, 100, 20, 10, 5, 1];

check.addEventListener("click", function validate() {
  hideMessage();
  if (BillAmount.value > 0) {
    if (CasAmount.value >= BillAmount.value) {
      const retAmount = CasAmount.value - BillAmount.value;
      calculateChange(retAmount);
      // displayMessage2(retAmount);
    } else {
      displayMessage("Do you wanna do dishes??");
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
  disp.style.display = "none";
}


function displayMessage(message) {
  msg.style.display = "block";
  msg.innerText = message;
}
