const nuril = document.querySelector("#nuril");
const anwar = document.querySelector("#anwar");
const alabsory = document.querySelector("#alabsory");

const intervalKu = setInterval(kelapKelip, 500);

function kelapKelip() {
  nuril.style.color = nuril.style.color == "red" ? "white" : "red";
  anwar.style.color = nuril.style.color == "white" ? "red" : "white";
  alabsory.style.color = alabsory.style.color == "red" ? "white" : "red";
}
