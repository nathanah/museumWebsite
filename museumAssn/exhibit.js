function more(){
  document.getElementById("more").style.display = "none";
  document.getElementById("section1image").classList.remove("sketch");
  document.getElementById("section2").classList.remove("hidden");
  document.getElementById("section2").classList.add("shown");
}

function less(){
  document.getElementById("more").style.display = "flex";
  document.getElementById("section2").classList.remove("shown");
  document.getElementById("section1image").classList.add("sketch");
  document.getElementById("section2").classList.add("hidden");
}
