class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

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
}

function closeOffer() {
  document
    .getElementById("hide")
    .setAttribute("style", "opacity: 0; height: 0;");
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

setTimeout(function() {
  let viewheight = $(window).height();
  let viewwidth = $(window).width();
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0"
  );
}, 300);
