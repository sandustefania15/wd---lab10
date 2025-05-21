let currentIndex = 0;

function showSlide(index) {
  let slides = document.querySelector(".slides");
  let totalSlides = document.querySelectorAll(".slides img").length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  let offset = -currentIndex * 100 + "%";
  slides.style.transform = `translateX(${offset})`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);
