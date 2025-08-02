function animateClick(element) {
  element.classList.add("animate-scale");
  setTimeout(() => {
    element.classList.remove("animate-scale");
  }, 200);
}

