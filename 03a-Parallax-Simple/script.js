window.addEventListener("scroll", updateIndicator);

function updateIndicator() {
  const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolledfactor = (scrolled / height) * 100;
  document.querySelector(".scroll_indicator").style.width = scrolledfactor + "%";
}
