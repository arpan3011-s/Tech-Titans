// Toggle FAQ answers
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
  
      // Collapse all other answers
      document.querySelectorAll(".faq-answer").forEach(ans => {
        if (ans !== answer) ans.style.display = "none";
      });
  
      // Toggle current
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
  