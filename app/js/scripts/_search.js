"use strict";

function Search({ buttonOpen, buttonClose, input, form, onOpen, onClose }) {
  let toggleSearchButton = isOpen => {
    if (isOpen) {
      buttonClose.classList.remove("close");
      buttonOpen.classList.add("close");
    } else {
      buttonClose.classList.add("close");
      buttonOpen.classList.remove("close");
    }
  };

  let open = () => {
    toggleSearchButton(true);
    window.utils.addOpen(input);
    window.utils.addOpen(form);
    onOpen();
  };

  let close = () => {
    toggleSearchButton(false);
    window.utils.removeOpen(input);
    window.utils.removeOpen(form);
    input.value = "";
    onClose();
  };

  buttonOpen.addEventListener("click", evt => {
    evt.preventDefault();
    open();
  });

  buttonClose.addEventListener("click", evt => {
    evt.preventDefault();
    close();
  });

  input.addEventListener("focus", () => {
    form.classList.add("focus");
  });

  input.addEventListener("blur", () => {
    form.classList.remove("focus");
  });

  return {
    open,
    close
  };
}
