// const navbar = document.querySelector(".header__nav");

// window.addEventListener("scroll", () => {
//   navbar.classList.toggle("sticky", this.scrollY > navbar.clientHeight);
// });

let skill = 100;
const backIcon = document.querySelectorAll(".backIcon");
const nextIcon = document.querySelectorAll(".nextIcon");
const technology = document.querySelector(".technology");

backIcon.forEach((icon) =>
  icon.addEventListener("click", () => {
    technology.style.right = `${skill - 100}%`;
    skill -= 100;
  })
);

nextIcon.forEach((icon) =>
  icon.addEventListener("click", () => {
    technology.style.right = `${skill + 100}%`;
    skill += 100;
  })
);
