function more() {
  var hide = document.getElementById("section2");
  var more = document.getElementById("more");
  if (hide.style.display === "none") {
    hide.style.display = "flex";
    more.style.display = "none";
  } else {
    hide.style.display = "none";
    more.style.display = "flex";
  }
}
