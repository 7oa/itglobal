"use strict";

function Submenu({ el, onClose }) {
  el.addEventListener("click", () => {
    let submenu = el.querySelector(".js-submenu");
    if (submenu) {
      window.utils.addOpen(submenu);
      let submenuClose = el.querySelector(".js-submenu-close");
      submenuClose.addEventListener("click", evt => {
        evt.stopPropagation();
        window.utils.removeOpen(submenu);
        onClose();
      });
    }
  });
}
