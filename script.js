document.addEventListener("DOMContentLoaded", function() {
    const tips = [
      "Pack light to reduce fuel consumption.",
      "Use a refillable water bottle instead of buying plastic ones.",
      "Choose eco-friendly accommodations with certifications like LEED or Green Key.",
      "Offset your carbon emissions by contributing to a carbon offset program.",
      "Use public transportation or bike to explore local destinations."
    ];
  
    const showTipsBtn = document.getElementById("show-tips-btn");
    const tipsList = document.getElementById("tips-list");
  
    showTipsBtn.addEventListener("click", function() {
      tipsList.innerHTML = ""; // Clear any existing tips
      tips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        tipsList.appendChild(li);
      });
      tipsList.classList.toggle("hidden");
    });
  });
  
