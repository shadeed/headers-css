let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

// let searchToggle = document.querySelector(".search__toggle");
// let searchForm = document.querySelector(".search__form");

navToggle.addEventListener("click", showNav);

// searchToggle.addEventListener("click", showSearch);

function showNav() {
  navWrapper.classList.toggle("active");
}

// function showSearch() {
//   searchForm.classList.toggle("active");
//   searchToggle.classList.toggle("active");

//   if (searchToggle.classList.contains("active")) {
//     searchToggle.setAttribute("aria-label", "Close search");
//   } else {
//     searchToggle.setAttribute("aria-label", "Open search");
//   }
// }
