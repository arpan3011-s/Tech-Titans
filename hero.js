document.getElementById("applyNowBtn").addEventListener("click", function(e) {
    e.preventDefault();
    const applySection = document.querySelector("#apply"); // change ID if needed
    applySection?.scrollIntoView({ behavior: "smooth" });
  });
  