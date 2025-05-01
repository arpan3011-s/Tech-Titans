document.getElementById("readMoreBtn").addEventListener("click", function () {
    var moreText = document.getElementById("moreText");
    var btn = this;
  
    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      btn.textContent = "Read More";
    } else {
      moreText.style.display = "inline";
      btn.textContent = "Read Less";
    }
  });
  