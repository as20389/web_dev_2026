function goToPage(page) {
  document.body.classList.add("fade-out");

  setTimeout(function() {
    window.location.href = page;
  }, 500);
}