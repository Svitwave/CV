// --- src/js/gallery.js ---

// Дані галереї
const galleryImages = Array.from({ length: 24 }, (_, i) => ({
  src: `./images/portfolio/image-${i + 1}.webp`,
  alt: `Praca ${i + 1}`,
  caption: `Praca ${i + 1}`,
}));

// Контейнер галереї
const galleryContainer = document.querySelector(".gallery");

// Генеруємо елементи
galleryContainer.innerHTML = galleryImages
  .map(
    (img) => `
    <a href="${img.src}" data-caption="${img.caption}">
      <img src="${img.src}" alt="${img.alt}" loading="lazy" />
    </a>
  `,
  )
  .join("");

// Ініціалізація BaguetteBox (легка галерея)
window.addEventListener("load", () => {
  if (typeof baguetteBox !== "undefined") {
    baguetteBox.run(".gallery", {
      animation: "fadeIn",
      buttons: window.innerWidth >= 1024,
      //   noScrollbars: true,
    });
  }
});
