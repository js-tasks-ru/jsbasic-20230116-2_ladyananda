function initCarousel() {
  let rightArrow = document.querySelector(".carousel__arrow_right");
  let leftArrow = document.querySelector(".carousel__arrow_left");
  let carouselInner = document.querySelector(".carousel__inner");

  let currentWidth = 0;
  leftArrow.style.display = "none";

  offsetRight = () => {
    carouselInner.style.transform = `translateX(${(currentWidth -=
      carouselInner.offsetWidth)}px)`;
    leftArrow.style.display = "";
    if (currentWidth < -carouselInner.offsetWidth * 2) {
      rightArrow.style.display = "none";
    }
  };

  offsetLeft = () => {
    carouselInner.style.transform = `translateX(${(currentWidth +=
      carouselInner.offsetWidth)}px)`;
    rightArrow.style.display = "";
    if (currentWidth == 0) {
      leftArrow.style.display = "none";
    }
  };

  rightArrow.addEventListener("click", offsetRight);
  leftArrow.addEventListener("click", offsetLeft);
}
