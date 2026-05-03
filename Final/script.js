// fade in when page loads
document.body.style.opacity = "0";

window.addEventListener("load", function () {
  document.body.style.transition = "opacity 0.6s ease";
  document.body.style.opacity = "1";
});

// cute click animation for album cards
const albumCards = document.querySelectorAll(".album-card");

albumCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.style.transform = "scale(0.96)";
  });
});