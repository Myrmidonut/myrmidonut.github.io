let burger = document.querySelector(".fas");
let menuPopUp = document.querySelector("#hamburger-container");
let link = document.querySelectorAll(".nav-link-hamburger");

burger.addEventListener("click", function () {
  menuPopUp.classList.toggle("hidden");
});

link.forEach(function (e) {
  e.addEventListener("click", function () {
    menuPopUp.classList.toggle("hidden");
  });
});