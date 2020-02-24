"use strict";

function handleClick() {
  var x = document.getElementById("mainDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}