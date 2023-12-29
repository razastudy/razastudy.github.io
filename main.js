const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// Redirecting to MOREINFO PAGE 
function moreinfo() {
  window.location.href = "Pages/moreinfo";
}
// Redirecting to DEMO PAGE 
function demo() {
  window.location.href = "Pages/demo";
}

