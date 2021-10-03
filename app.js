// const navbar = document.querySelector(".header__nav");

// window.addEventListener("scroll", () => {
//   navbar.classList.toggle("sticky", this.scrollY > navbar.clientHeight);
// });

let skill = 100;
let dot = 1;
const backIcon = document.querySelectorAll(".backIcon");
const nextIcon = document.querySelectorAll(".nextIcon");
const technology = document.querySelector(".technology__box");
const technology__dot = document.querySelectorAll(".technology__dotBox__dot");
const project = document.querySelector(".projectSection");

technology__dot[dot].style.backgroundColor = "black";

backIcon.forEach((icon) =>
  icon.addEventListener("click", () => {
    technology.style.right = `${skill - 100}%`;
    technology__dot[dot].style.backgroundColor = "lightgray";
    technology__dot[dot - 1].style.backgroundColor = "black";
    skill -= 100;
    dot -= 1;
  })
);

nextIcon.forEach((icon) =>
  icon.addEventListener("click", () => {
    technology.style.right = `${skill + 100}%`;
    technology__dot[dot].style.backgroundColor = "lightgray";
    technology__dot[dot + 1].style.backgroundColor = "black";
    skill += 100;
    dot += 1;
  })
);

technology__dot.forEach((dotEl, index) =>
  dotEl.addEventListener("click", () => {
    technology.style.right = `${index}00%`;
    technology__dot[dot].style.backgroundColor = "lightgray";
    technology__dot[index].style.backgroundColor = "black";
    skill = Number(`${index}00`);
    console.log(skill);
    dot = index;
  })
);

window.addEventListener("scroll", () => {
  let windowScroll = window.scrollY;
  project.style.backgroundPosition = `50% ${windowScroll * 0.04}%`;
});
