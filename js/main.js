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
    const service = services.find((s) => s.id === card.dataset.id);
    if (!service) return;

    title.textContent = service.title;
    description.textContent = service.description;

    // Очищаємо попередній контент
    content.innerHTML = "";

    // Створюємо список деталей
    const ul = document.createElement("ul");
    service.details.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    content.appendChild(ul);

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
