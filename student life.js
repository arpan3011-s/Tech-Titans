const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Hide all content
    tabContents.forEach(content => content.classList.remove("active"));

    // Show selected content
    const selectedTab = btn.getAttribute("data-tab");
    document.getElementById(selectedTab).classList.add("active");
  });
});
