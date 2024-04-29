var slideIndex = 1;
showSlide(slideIndex);

function plusSlidess(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("Slide");
  console.log(slide);

  if (n > slide.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  slide[slideIndex - 1].style.display = "flex";
}

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("yu");
    });
    tab.classList.add("yu");

    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");

      document.getElementById(target.id).style.background = "tomato";
    });

    target.classList.add("active");
    document.getElementById(target.id).style.background = "";
  });
});
