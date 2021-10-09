let skill = 100;
let techDot = 1;
let projectDot = 0;
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const sidebarItem = document.querySelectorAll(".sidebar .header__ul__a");
const techBackIcon = document.querySelector(".technology-backIcon");
const techNextIcon = document.querySelector(".technology-nextIcon");
const technology = document.querySelector(".technology__box");
const technology__dot = document.querySelectorAll(".technology__dotBox__dot");
const project = document.querySelector(".projectSection");
const popup = document.querySelector(".popup");
const popupGallery = document.querySelector(".popup-imageGallery");
const popupNextIcon = document.querySelector(".popup-nextIcon");
const popupBackIcon = document.querySelector(".popup-backIcon");

const checkDot = (el, dot, index) => {
  if (dot === index) {
    el.style.display = "none";
  } else {
    el.style.display = "inline-block";
  }
};

menu.addEventListener("click", () => {
  sidebar.classList.add("visible");
});

sidebar.addEventListener("click", (e) => {
  if (e.target === sidebar) {
    sidebar.classList.remove("visible");
  }
});

sidebarItem.forEach((item) =>
  item.addEventListener("click", () => {
    if (sidebar.classList.contains("visible")) {
      sidebar.classList.remove("visible");
    }
  })
);

technology__dot[techDot].style.backgroundColor = "black";
checkDot(popupBackIcon, techDot, 0);

techBackIcon.addEventListener("click", () => {
  techDot -= 1;
  skill -= 100;
  checkDot(techBackIcon, techDot, 0);
  checkDot(techNextIcon, techDot, 2);
  technology.style.right = `${skill}%`;
  technology__dot[techDot + 1].style.backgroundColor = "lightgray";
  technology__dot[techDot].style.backgroundColor = "black";
});

techNextIcon.addEventListener("click", () => {
  techDot += 1;
  skill += 100;
  checkDot(techBackIcon, techDot, 0);
  checkDot(techNextIcon, techDot, 2);
  technology.style.right = `${skill}%`;
  technology__dot[techDot - 1].style.backgroundColor = "lightgray";
  technology__dot[techDot].style.backgroundColor = "black";
});

technology__dot.forEach((dotEl, index) =>
  dotEl.addEventListener("click", () => {
    technology.style.right = `${index}00%`;
    technology__dot[techDot].style.backgroundColor = "lightgray";
    technology__dot[index].style.backgroundColor = "black";
    skill = Number(`${index}00`);
    techDot = index;
    checkDot(techBackIcon, techDot, 0);
    checkDot(techNextIcon, techDot, 2);
  })
);

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    window.location.href = "#project";
  }
});

popupBackIcon.addEventListener("click", () => {
  projectDot -= 1;
  checkDot(popupBackIcon, projectDot, 0);
  checkDot(popupNextIcon, projectDot, 3);
  popupGallery.style.right = `${projectDot}00%`;
});

popupNextIcon.addEventListener("click", () => {
  projectDot += 1;
  checkDot(popupBackIcon, projectDot, 0);
  checkDot(popupNextIcon, projectDot, 3);
  popupGallery.style.right = `${projectDot}00%`;
});

window.addEventListener("scroll", () => {
  let windowScroll = window.scrollY;
  project.style.backgroundPosition = `50% ${windowScroll * 0.04}%`;
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    if (sidebar.classList.contains("visible")) {
      sidebar.classList.remove("visible");
    }
  }
});
