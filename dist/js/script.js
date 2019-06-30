// Prevents narrowing of the width on mobile devices
setTimeout(function() {
  let viewheight = $(window).height();
  let viewwidth = $(window).width();
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0"
  );
}, 300);

// Slide Menu
function openSlideMenu() {
  document.getElementById("side-menu").style.width = "305px";
}

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
}

//Offer Slide out
function showOffer() {
  document
    .getElementById("hide")
    .setAttribute("style", "opacity: 1; height: 275px;  pointer-events: all;");

  document.getElementById("open-offer").style.opacity = 0;
}

function closeOffer() {
  document
    .getElementById("hide")
    .setAttribute("style", "opacity: 0; height: 0;");
  document.getElementById("open-offer").style.opacity = 1;
}

// Transparent/Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    document.querySelector("#main-nav").style.background =
      "rgba(70, 70, 70, 0.9";
  } else {
    document.querySelector("#main-nav").style.background = "transparent";
  }
});

// Sticky back to top button
window.addEventListener("scroll", function() {
  if (window.scrollY > 1200) {
    document.querySelector("#btn-up").style.opacity = 0.85;
  } else {
    document.querySelector("#btn-up").style.opacity = 0;
  }
});

// Smooth Scrolling
$("#main-nav .subpage, .btn, #btn-up a, .scroll").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
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

    setTimeout(() => (main.style.opacity = 1), 50);
  }, 2000);
}

init();

// Google Maps
function initMap() {
  // Map options
  var options = {
    zoom: 9, // zoom
    center: { lat: 54.328506, lng: -2.74387 } // lattitude and longitute
  };

  // New map
  var map = new google.maps.Map(document.getElementById("map"), options);

  //Add Marker
  var marker = new google.maps.Marker({
    animation: google.maps.Animation.BOUNCE,
    position: { lat: 54.328506, lng: -2.74387 },
    map: map
  });
}
