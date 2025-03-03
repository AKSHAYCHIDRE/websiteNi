$(document).foundation();

// Company Partner Carousel
$(document).ready(function () {
  $(".company-partner-carousel").owlCarousel({
    items: 5,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });
});

// Menu Toogle

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".right-side");
const closeMenu = document.querySelector(".close-menu");

// Add event listener to toggle the menu visibility
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Add event listener to close the menu (close icon)
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
