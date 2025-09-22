const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function showImage(index) {
      if (index < 0) index = galleryImages.length - 1;
      if (index >= galleryImages.length) index = 0;
      currentIndex = index;
      lightboxImg.src = galleryImages[currentIndex].src.replace("/300/200", "/1000/700"); // versão maior
      lightbox.classList.add("active");
    }

    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => showImage(index));
    });

    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    prevBtn.addEventListener("click", () => {
      showImage(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      showImage(currentIndex + 1);
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });