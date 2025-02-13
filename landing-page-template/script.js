// Mobile Menu Toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

function closeMenu() {
  document.getElementById("mobile-menu").style.display = "none";
}

// Cookie popup
function acceptCookies() {
  document.getElementById("cookie-popup").style.display = "none";
}
