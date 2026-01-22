// Простенький reveal при скролі (для портфоліо +)
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateY(0)";
      entry.target.style.opacity = "1";
    }
  });
});

cards.forEach((card) => {
  card.style.transform = "translateY(30px)";
  card.style.opacity = "0";
  card.style.transition = "0.6s";
  observer.observe(card);
});

// ----------portfolio------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   lightGallery(document.getElementById("portfolio-gallery"), {
//     selector: "a",
//     download: false, // прибирає кнопку завантаження
//     zoom: true,
//     thumbnail: true,
//     animateThumb: true,
//     showThumbByDefault: true,
//   });
// });

window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});
