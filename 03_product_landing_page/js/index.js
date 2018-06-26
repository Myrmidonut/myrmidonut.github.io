let menuToggle = document.querySelector(".fa-bars");
let menuPopUp = document.querySelector(".hamburger-container");
let link = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {
  menuPopUp.classList.toggle("active");
  menuPopUp.classList.toggle("hidden");
});

link.forEach(function (e) {
  e.addEventListener("click", function () {
    menuPopUp.classList.add("hidden");
    menuPopUp.classList.remove("active");
  });
});