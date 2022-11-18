function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("hidden");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "⬇ More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "⬆ Less"; 
    moreText.style.display = "inline";
  }
}
