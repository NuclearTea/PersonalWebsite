window.addEventListener("load", function () {
  const fadeHeader = document.querySelectorAll(".fade-underline-text");

  if (fadeHeader) {
    fadeHeader.forEach((element) => element.classList.add("fade-in-underline"));
  }
});
