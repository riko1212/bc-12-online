const refs = {
        openModalBtn: document.querySelector("[data-open-btn]"),
        closeModalBtn: document.querySelector("[data-close-btn]"),
        backdrop: document.querySelector("[data-backdrop]"),
      };
      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);

      function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
      }