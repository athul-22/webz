const sidebarToggle = document.querySelector(".sidebar__toggle"),
  sidebar = document.querySelector(".sidebar"),
  sidebarLink = document.querySelectorAll(".sidebar__link");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--open");
});

function activeLink() {
  sidebarLink.forEach((link) => {
    link.classList.remove("sidebar__link--active");
    this.classList.add("sidebar__link--active");
  });
}

sidebarLink.forEach((link) => {
  link.addEventListener("click", activeLink);
});