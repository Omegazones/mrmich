// PHOTO GALLERY

const gallery = document.getElementById("photo-gallery");
const showMoreBtn = document.getElementById("showMoreBtn");
const showLessBtn = document.getElementById("showLessBtn");
/* const initialVisibleCount = 10;  */ // Number of images to show initially

// Hide images beyond the initial count
/* or (let i = initialVisibleCount; i < images.length; i++) {
  images[i].classList.add("hidden");
}

// Show "Show More" button if there are hidden images
if (images.length > initialVisibleCount) {
  showMoreBtn.classList.remove("hidden");
} */

showMoreBtn.addEventListener("click", function () {
  // Show all hidden images
  /* const hiddenImages = gallery.querySelectorAll(".hidden");
  hiddenImages.forEach((img) => {
    img.classList.remove("hidden");
  }); */

  gallery.classList.remove("height");

  // Hide "Show More" and show "Show Less" button
  showMoreBtn.classList.add("hidden");
  showLessBtn.classList.remove("hidden");
});

showLessBtn.addEventListener("click", function () {
  // Hide images beyond the initial count again
  /* for (let i = initialVisibleCount; i < images.length; i++) {
    images[i].classList.add("hidden");
  }
 */
  gallery.classList.add("height");

  // Hide "Show Less" and show "Show More" button
  showLessBtn.classList.add("hidden");
  showMoreBtn.classList.remove("hidden");

  // Scroll back to the top of the gallery (optional)
  gallery.scrollIntoView({ behavior: "smooth" });
});

//Image Slide

const slide = document.getElementsByClassName("slide");
const dot = document.getElementsByClassName("dot");

let slideIndex = 0;

function showSlides() {
  let i;

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }

  slide[slideIndex - 1].style.display = "block";
  dot[slideIndex - 1].className += " active";

  setTimeout(showSlides, 2000);
}

showSlides();

/*Menu*/

const links = document.getElementById("links");
const menu = document.getElementById("menu");

menu.addEventListener("click", function () {
  links.classList.replace("links", "sm-links");
  menu.classList.toggle("sm-menu");
});

function resetM() {
  if (
    links.classList.contains("sm-links") &&
    menu.classList.contains("sm-menu")
  ) {
    links.classList.replace("sm-links", "links");
    menu.classList.toggle("sm-menu");
  }
}

document.body.addEventListener("mousedown", resetM);
