function more() {
  var hide = document.getElementById("section2");
  var more = document.getElementById("more");
  if (hide.style.display === "flex") {
    hide.style.display = "none";
    more.style.display = "flex";
  } else {
    hide.style.display = "flex";
    more.style.display = "none";
  }
}
