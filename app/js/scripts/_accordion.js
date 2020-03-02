"use strict";

function Accordion({ accordions, el, title }) {
  title.addEventListener("click", () => {
    if (!el.classList.contains("open")) {
      let otherAccordions = Array.prototype.filter.call(
        accordions,
        child => child !== el
      );
      otherAccordions.forEach(el => window.utils.removeOpen(el));
    }
    window.utils.toggleOpen(el);
  });
}
