// Slide Menu
function openSlideMenu() {
  document.getElementById("side-menu").style.width = "305px";
}

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
}

// AOS Customization
AOS.init({
  easing: "ease-in-out",
  once: "true",
});

// Offer Slide out
function showOffer() {
  document
    .getElementById("hide")
    .setAttribute("style", "opacity: 1; height: 275px;  pointer-events: all;");

  document.getElementById("open-offer").style.opacity = "0";
}

function closeOffer() {
  document
    .getElementById("hide")
    .setAttribute("style", "opacity: 0; height: 0;");
  document.getElementById("open-offer").style.opacity = "1";
}

// Transparent/Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.querySelector("#main-nav").style.background =
      "rgba(70, 70, 70, 0.9";
  } else {
    document.querySelector("#main-nav").style.background = "transparent";
  }
});

// Sticky back to top button
window.addEventListener("scroll", function () {
  if (window.scrollY > 1200) {
    document
      .querySelector("#btn-up")
      .setAttribute("style", "opacity: 0.85; pointer-events: all");
  } else {
    document
      .querySelector("#btn-up")
      .setAttribute("style", "opacity: 0; pointer-events: none");
  }
});

// Smooth Scrolling
$("#main-nav .subpage, .btn, #btn-up a, .scroll").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Loader
const loader = document.querySelector(".loader");
const main = document.querySelector(".main");
const scroll = document.querySelector("body");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";
    scroll.style.overflowY = "scroll";
    main.style.visibility = "visible";

    setTimeout(() => (main.style.opacity = 1), 50);
  }, 2000);
}

init();

// Leaflet map
const map = L.map("map").setView([51.50826, -0.46633], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.50826, -0.46633]).addTo(map).bindPopup("We are here!").openPopup();
