// Coded by nexd3v as a learning project!

// Intro to Website
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

// Button Function
let button = document.getElementById("knapp");
const url = "https://youtu.be/g3jCAyPai2Y";

button.addEventListener("click", function () {
  alert(
    "馬鹿みたい 子供なのね \n 夢を追って傷ついて \n 嘘が下手なくせに 笑えない笑顔みせた \n I love youも ろくに言わない \n 口下手でほんまに不器用 \n なのになのにどうして サヨナラは言えたの \n だめだね だめよ だめなのよ \n あんたが 好きで好きすぎて \n どれだけ 強いお酒でも \n 歪まない思い出が 馬鹿みたい"
  );
  window.open(url, "_blank");
});

const array = [];
console.log(array);

button.addEventListener("click", function () {
  array.push(1, 2, 3);
  console.log(array);
});
