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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Finds all section elements and adds a list item (with an anchor) to the navbar
function addListItems(navUl) {
  const section = document.querySelectorAll("section");
  section.forEach((e) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", 'nav__li');
    listItem.innerHTML = `<a class="nav__link" href="#${e.id}">${e.getAttribute(
      "data-nav"
    )}</a>`;

    console.log(listItem);

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

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
