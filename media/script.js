function contactUs() {
  const phoneNumber = "4252810182";
  window.location.href = `tel:${phoneNumber}`;
}

window.addEventListener("scroll", function () {
  const scroll = window.pageYOffset;
  document.querySelector(".hero").style.backgroundPositionY =
    scroll * 0.5 + "px";
});
