document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".photo img").forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxContent.src = image.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  document.querySelectorAll(".filters button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      document.querySelectorAll(".photo").forEach((photo) => {
        if (
          filter === "all" ||
          photo.getAttribute("data-category") === filter
        ) {
          photo.style.display = "block";
        } else {
          photo.style.display = "none";
        }
      });
    });
  });
});
