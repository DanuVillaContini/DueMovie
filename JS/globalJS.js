// BLUR EN EL NAVBAR
window.addEventListener("scroll", function() {
  let navbar = document.getElementById("navbar");
  if (window.scrollY >= 100) {
      navbar.classList.add("navbar-transparent", "navbar-blur");
  } else {
      navbar.classList.remove("navbar-transparent", "navbar-blur");
  }
});


