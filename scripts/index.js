let button = document.getElementById("knapp");

button.addEventListener("click", function () {
  alert("hahaha");
});

const array = [];
console.log(array);

button.addEventListener("click", function () {
  array.push(1, 2, 3);
  console.log(array);
});

let buttonX = document.getElementById("buttonx");
const url = "http://x.com/_nexd3v";

buttonX.addEventListener("click", function () {
  window.open(url, "_blank");
});

const arrayX = [];
console.log(arrayX);

buttonX.addEventListener("click", function () {
  arrayX.push(1, 2, 3);
  console.log(arrayX);
});
