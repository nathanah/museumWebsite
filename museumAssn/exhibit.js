function more(){
  document.getElementById("more").style.display = "none";
  document.getElementById("sketch").classList.remove("sketch");
  document.getElementById("section2").classList.remove("hidden");
  document.getElementById("sketch").classList.add("shown");
  document.getElementById("section2").classList.add("shown");
}

function less(){
  document.getElementById("more").style.display = "flex";
  document.getElementById("sketch").classList.remove("shown");
  document.getElementById("section2").classList.remove("shown");
  document.getElementById("sketch").classList.add("sketch");
  document.getElementById("section2").classList.add("hidden");
}
