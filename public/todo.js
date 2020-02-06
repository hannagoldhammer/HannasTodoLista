// let btn = document.getElementsByClassName("btnHide");

// btn.addEventListener("click", handleClick);

function handleClick() {
  // debugger;
  var x = document.getElementById("mainDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}