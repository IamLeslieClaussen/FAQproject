const faqHeaders = document.querySelectorAll(".faq__element__header h2");

function toggleFAQ(Header) {
  console.log("clicked FAQ", Header.textContent);
  Header.parentNode.nextElementSibling.classList.toggle("active");

  const currentSrc = Header.nextElementSibling.src;

  let newSrc;
  if (currentSrc.includes("icon-plus")) {
    newSrc = "./assets/images/icon-minus.svg";
  } else {
    newSrc = "./assets/images/icon-plus.svg";
  }
  Header.nextElementSibling.src = newSrc;
}

faqHeaders.forEach((Header) => {
  Header.addEventListener("click", () => {
    console.log("click");
    toggleFAQ(Header);
  });
});
