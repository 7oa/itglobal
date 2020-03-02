"use strict";

function SelectLanguage(el) {
  let selectLangValueEl = el.querySelector(".js-select-lang-value");
  let selectLangOptionsEl = el.querySelector(".js-select-lang-options");
  let selectLangOptionsElHeight = selectLangOptionsEl.offsetHeight;
  let selectLangValueElHeight = selectLangValueEl.offsetHeight;

  let close = () => {
    window.utils.removeOpen(el);
    el.style.height = selectLangValueElHeight + "px";
  };

  let open = () => {
    window.utils.addOpen(el);
    el.style.height =
      selectLangOptionsElHeight + selectLangValueElHeight + "px";
  };

  el.addEventListener("click", () => {
    if (el.classList.contains("open")) close();
    else open();
  });

  return {
    close
  };
}
