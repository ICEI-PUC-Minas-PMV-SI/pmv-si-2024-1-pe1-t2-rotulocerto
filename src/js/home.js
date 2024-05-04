document.addEventListener("DOMContentLoaded", function() {
  // Carousel
  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const buttons = document.querySelectorAll(".carousel-btn");

  const slideWidth = slide.clientWidth;
  let positionState = 0;
  let position = 0;

  const changeActiveDot = (position) => {
    buttons.forEach((button) => {
      if(button.getAttribute("data-img") == position){
        button.classList.add("active");
      }else{
        button.classList.remove("active");
      }
    })
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      position = button.getAttribute("data-img");
      slidesContainer.scrollLeft = slideWidth * position;
      positionState = slideWidth * position;

      changeActiveDot(position);
    });
  });

  setInterval(() => {
    if (position >= 4) {
      position = 0;
    }
    positionState = slideWidth * position;
    slidesContainer.scrollLeft = positionState;
    changeActiveDot(position);
    position++

  }, 4000);

});
