document.addEventListener("DOMContentLoaded", () => {
  const dropdownLink = document.querySelector(".dropdown-toggle"); 

  if (dropdownLink) {
    dropdownLink.addEventListener("click", function (e) {
      e.preventDefault();

      this.parentElement.classList.toggle("show"); 
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".dropdown")) {
        document.querySelector(".dropdown")?.classList.remove("show");
      }
    });
  }
});
