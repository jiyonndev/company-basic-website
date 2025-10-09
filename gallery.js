// Get elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const galleryImages = document.querySelectorAll(".gallery-grid img");

// When any image is clicked
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close when "×" is clicked
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Also close when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
