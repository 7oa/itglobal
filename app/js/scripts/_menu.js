"use strict";

function Menu({ openButton, closeButton, menu, onClose }) {
  openButton.addEventListener("click", () => {
    window.utils.addOpen(menu);
  });
  closeButton.addEventListener("click", () => {
    window.utils.removeOpen(menu);
    onClose();
  });
}
