const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

function moveNoButton() {
  const maxX = window.innerWidth - noButton.offsetWidth - 10;
  const maxY = window.innerHeight - noButton.offsetHeight - 10;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noButton.style.position = "fixed";
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
}

noButton.addEventListener("mouseenter", moveNoButton);

noButton.addEventListener("touchstart", function(event) {
  event.preventDefault();
  moveNoButton();
});

noButton.addEventListener("click", moveNoButton);

yesButton.addEventListener("click", function() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("success").classList.remove("hidden");
});