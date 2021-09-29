const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", this.scrollY > navbar.clientHeight);
});
