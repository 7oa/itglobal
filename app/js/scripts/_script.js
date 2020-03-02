"use strict";

(function() {
  let langWrapperEl = document.querySelector(".js-lang");
  let selectLangEl = document.querySelector(".js-select-lang");
  let selectLang = new SelectLanguage(selectLangEl);

  let searchOpenEl = document.querySelector(".js-search-open");
  let searchCloseEl = document.querySelector(".js-search-close");
  let searchFormEl = document.querySelector(".js-search-form");
  let searchInputEl = document.querySelector(".js-search-input");

  let elWithSubmenu = document.querySelectorAll(".js-whith-submenu");
  elWithSubmenu.forEach(el => {
    new Submenu({
      el,
      onClose: () => {
        setTimeout(() => {
          let openedAccordion = document.querySelector(".js-accordion.open");
          if (openedAccordion) window.utils.removeOpen(openedAccordion);
        }, 500);
      }
    });
  });

  let search = new Search({
    buttonOpen: searchOpenEl,
    buttonClose: searchCloseEl,
    input: searchInputEl,
    form: searchFormEl,
    onOpen: () => {
      langWrapperEl.classList.add("hide");
      selectLang.close();
    },
    onClose: () => {
      langWrapperEl.classList.remove("hide");
    }
  });

  let menuEl = document.querySelector(".js-menu");
  let backButtonEl = document.querySelector(".js-back-button");
  let burgerButtonEl = document.querySelector(".js-burger-button");
  new Menu({
    openButton: burgerButtonEl,
    closeButton: backButtonEl,
    menu: menuEl,
    onClose: () => {
      setTimeout(() => {
        selectLang.close();
        search.close();
        let openedSubmenu = document.querySelector(".js-submenu.open");
        if (openedSubmenu) window.utils.removeOpen(openedSubmenu);
        let openedAccordion = document.querySelector(".js-accordion.open");
        if (openedAccordion) window.utils.removeOpen(openedAccordion);
      }, 500);
    }
  });

  let accordions = document.querySelectorAll(".js-accordion");
  accordions.forEach(el => {
    let title = el.querySelector(".js-accordion-title");
    new Accordion({
      accordions,
      el,
      title
    });
  });
})();
