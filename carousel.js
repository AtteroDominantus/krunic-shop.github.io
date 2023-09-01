const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
      
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
})

})

function toggleText() {
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");  
  if (text1.style.opacity === "0") {
    text1.style.opacity = "1";
    text2.style.opacity = "0";
  } else {
    text1.style.opacity = "0";
    text2.style.opacity = "1";
  }
}

setInterval(toggleText, 2000); // Toggle every 2 seconds
; // Toggle every 2 seconds


const footerBtn = document.querySelectorAll("[data-footer-button]");
const footerUl = document.querySelectorAll("[data-footer-ul]");
const footerArrow = document.querySelectorAll("[data-footer-arrow]");


footerBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    footerUl.forEach((ul, ulIndex) => {
      if (index === ulIndex) {
        ul.classList.toggle("show-footer");
       
        footerArrow[ulIndex].classList.toggle("rotate");
      }
    });
  });
});