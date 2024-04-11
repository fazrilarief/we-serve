const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((header) => {
  header.addEventListener("click", () => {
    // Tutup accordion lainnya jika dibuka
    const openAccordions = document.querySelectorAll(
      ".accordion-header.active",
    );
    openAccordions.forEach((openHeader) => {
      if (openHeader !== header) {
        // Cek kalau bukan header yang diklik
        openHeader.classList.remove("active");
        openHeader.nextElementSibling.style.maxHeight = 0;
      }
    });

    // Buka/tutup accordion yang diklik
    header.classList.toggle("active");
    const accordionBody = header.nextElementSibling;
    if (header.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});
