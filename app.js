const toggleBtn = document.querySelector(".toggle-btn");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const date = document.getElementById("date");
const topBtn = document.querySelector(".top-btn");
const scrollLinks = document.querySelectorAll(".scroll-link");

date.textContent = new Date().getFullYear();

toggleBtn.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  console.log(linksContainerHeight);
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topBtn.classList.remove("hide");
  } else {
    topBtn.classList.add("hide");
  }
});

topBtn.addEventListener("click", function () {
  scrollTo({
    top: 0,
    left: 0,
  });
});

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const element = link.getAttribute("href").slice(1);
    const page = document.getElementById(element);
    let location = page.offsetTop;
    const navHeight = nav.getBoundingClientRect().height;
    location = location - navHeight;
    console.log(page.offsetTop);
    if (!nav.classList.contains("fixed-nav")) {
      location = location - navHeight;
    }
    if (navHeight > 65) {
      location = location + links.getBoundingClientRect().height;
    }
    linksContainer.style.height = 0;
    scrollTo({
      top: location,
    });
  });
});
