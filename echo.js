var header = document.querySelector("h1");
document.addEventListener("keypress", captured);
function captured(event) {
  header.innerHTML += event.key;
}
