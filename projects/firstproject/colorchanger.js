let text = document.querySelector("#text");
let redColor = document.querySelector("#redButton");
let greenColor = document.querySelector("#greenButton");
let blueColor = document.querySelector("#blueButton");

redColor.addEventListener("click", () => {
  text.style.color = "red";
});
greenColor.addEventListener("click", () => {  
  text.style.color = "green";
});
blueColor.addEventListener("click", () => {
  text.style.color = "blue";
});