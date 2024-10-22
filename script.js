window.addEventListener("load", function () {
  const fadeHeader = document.querySelectorAll(".fade-underline-text");

  if (fadeHeader) {
    fadeHeader.forEach((element) => element.classList.add("fade-in-underline"));
  }
});

// Get all divs that act as buttons to open modals
const openModalDivs = document.querySelectorAll("[data-modal]");

// Get all modal elements
const modals = document.querySelectorAll(".modal");

// Add event listeners to div buttons
openModalDivs.forEach((div) => {
  div.addEventListener("click", function () {
    // Close any open modal first
    modals.forEach((modal) => modal.classList.remove("show"));

    // Get the modal ID from data attribute and display it
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.classList.add("show");
  });
});

// Add event listeners to close buttons
const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    this.closest(".modal").classList.remove("show");
  });
});

// Close modal when user clicks outside of the modal content
window.onclick = function (event) {
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.classList.remove("show");
    }
  });
};
