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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
 const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Finds all section elements and adds a list item (with an anchor) to the navbar
function addListItems(navUl) {
  sections.forEach((e) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", `${e.id}__li`);
    listItem.innerHTML = `<span id=${e.id}__link class="nav__link">${e.getAttribute(
      "data-nav"
    )}</a>`;

    //add event listener to list item for a click, and scroll to respective section
    listItem.addEventListener("click", function () {
      const section = document.querySelector(`#${e.id}`);
      section.scrollIntoView(true);
    }); 

    navUl.appendChild(listItem);
  });
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const navUl = document.querySelector("#navbar__list");
addListItems(navUl);

// Add class 'active' to section when it is near top of viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const navLink = document.querySelector(`#${section.id}__link`);

    if (box.top <= 75 && box.bottom >= 75) {
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

/**
 * End Main Functions
 * Begin Events
 *
 */
// Make sections active
document.addEventListener("scroll", function() {
  makeActive();
});
// Build menu

// Scroll to section on link click

// Set sections as active
