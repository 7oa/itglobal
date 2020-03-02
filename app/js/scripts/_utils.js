"use strict";

(function() {
  window.utils = {
    toggleOpen: el => el.classList.toggle("open"),
    removeOpen: el => el.classList.remove("open"),
    addOpen: el => el.classList.add("open")
  };
})();
