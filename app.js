function toggleNavbar() {
    var navbarItems = document.getElementById("navbarItems");
    if (navbarItems.className === "") {
      navbarItems.className = "show";
    } else {
      navbarItems.className = "";
    }
  }