const menuRefs = {
        openMenuBtn: document.querySelector("[data-menu-open-btn]"),
        closeMenuBtn: document.querySelector("[data-menu-close-btn]"),
    menuBackdrop: document.querySelector("[data-menu-backdrop]"),
        menuList: document.querySelector(".mob-menu-list")
      };
      menuRefs.openMenuBtn.addEventListener("click", toggleMenu);
        menuRefs.closeMenuBtn.addEventListener("click", toggleMenu);
      menuRefs.menuList.addEventListener("click", closeMenu);

      function toggleMenu() {
        menuRefs.menuBackdrop.classList.toggle("is-hidden");
}
      
    function closeMenu() {
        menuRefs.menuBackdrop.classList.add("is-hidden");
      }