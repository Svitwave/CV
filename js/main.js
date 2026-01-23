// Простенький reveal при скролі (для портфоліо +)
// const card = document.querySelectorAll(".card");

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.transform = "translateY(0)";
//       entry.target.style.opacity = "1";
//     }
//   });
// });

// card.forEach((card) => {
//   card.style.transform = "translateY(30px)";
//   card.style.opacity = "0";
//   card.style.transition = "0.6s";
//   observer.observe(card);
// });

window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});

// ---------------------------MODAL---------------------------

const cards = document.querySelectorAll(".service-card");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.getElementById("serviceModal");
const title = modal.querySelector(".modal-title");
const description = modal.querySelector(".modal-description");
const content = modal.querySelector(".modal-details");
const closeBtn = modal.querySelector(".modal-close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    title.textContent = card.dataset.title;
    description.textContent = card.dataset.description;
    content.textContent = card.dataset.details;

    modalOverlay.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modalOverlay.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});

// const cards = document.querySelectorAll(".service-card");
// const modal = document.getElementById("serviceModal");
// const title = modal.querySelector(".modal-title");
// const description = modal.querySelector(".modal-description");
// const content = modal.querySelector(".modal-content");
// const closeBtn = modal.querySelector(".modal-close");

// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     title.textContent = card.dataset.title;
//     description.textContent = card.dataset.description;
//     content.innerHTML = card.dataset.content;

//     modal.classList.add("active");
//     modal.setAttribute("aria-hidden", "false");
//   });
// });

// closeBtn.addEventListener("click", closeModal);
// modal.addEventListener("click", (e) => {
//   if (e.target === modal) closeModal();
// });

// function closeModal() {
//   modal.classList.remove("active");
//   modal.setAttribute("aria-hidden", "true");
// }

// // ------------------close modal on ESC key press------------------

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" && modal.classList.contains("active")) {
//     closeModal();
//   }
// });

// function closeModal() {
//   modal.classList.remove("active");
//   modal.setAttribute("aria-hidden", "true");
//   document.body.style.overflow = "";
// }

// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     document.body.style.overflow = "hidden";
//   });
// });
