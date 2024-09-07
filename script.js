const faqHeaders = document.querySelectorAll(".faq__element__header h2");

function toggleFAQ(Header) {
  console.log("clicked FAQ", Header.textContent);
  Header.parentNode.nextElementSibling.classList.toggle("active");

  const imageElement = 
}

faqHeaders.forEach((Header) => {
  Header.addEventListener("click", () => {
    console.log("click");
    toggleFAQ(Header);
  });
});
