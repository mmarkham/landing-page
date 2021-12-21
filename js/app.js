/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
 const sections = document.querySelectorAll("section");

// Finds all section elements and adds a list item (with an anchor) to the navbar
function addListItems(navUl) {
  sections.forEach((e) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", `${e.id}__li`);
    listItem.innerHTML = `<span id=${e.id}__link class="nav__link">${e.getAttribute(
      "data-nav"
    )}</a>`;

    //add event listener to list item for a click, and scroll to respective section
    listItem.addEventListener("click", function (event) {
      const section = document.querySelector(`#${e.id}`);
      event.preventDefault();
      section.scrollIntoView({behavior: "smooth"});
    }); 

    navUl.appendChild(listItem);
  });
}

// build the nav
const navUl = document.querySelector("#navbar__list");
addListItems(navUl);

// Add class 'active' to section when it is near top of viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const navLink = document.querySelector(`#${section.id}__link`);

    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
      section.classList.add("active");
      navLink.classList.add("link__active")
    } else {
      // Remove active state from other section and corresponding Nav link.
      section.classList.remove("active");
      navLink.classList.remove("link__active")
    }
  }
}

// Scroll to anchor ID using scrollTO event
// Make sections active
document.addEventListener("scroll", function() {
  makeActive();
});

