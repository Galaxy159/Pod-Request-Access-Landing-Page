"use-strict";

const input = document.querySelector(".cta__input--input");
const inputBtn = document.querySelector(".cta__btn");
const error = document.querySelector(".cta__input--error");

const validateEmail = function (email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    error.textContent = "Oops! Please add your email";
  } else if (!validateEmail(input.value)) {
    error.textContent = "Oops! Please check your email";
  } else {
    error.textContent = "";
  }
});
