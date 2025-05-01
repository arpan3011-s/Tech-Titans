const menuItems = [
    { name: "Veg Biryani", calories: 450, nutrition: "Carbs, Protein" },
    { name: "Grilled Chicken", calories: 520, nutrition: "High Protein" },
    { name: "Salad Bowl", calories: 150, nutrition: "Fiber, Vitamins" },
    { name: "Paneer Wrap", calories: 390, nutrition: "Protein, Carbs" },
    { name: "Fruit Juice", calories: 120, nutrition: "Natural Sugars" }
  ];
  
  let totalCalories = 0;
  const selectedItems = new Set();
  
  function renderMenu() {
    const menuList = document.getElementById("menu-list");
    menuItems.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "menu-item";
      div.innerHTML = `
        <div>
          <strong>${item.name}</strong><br>
          ${item.nutrition} - ${item.calories} kcal
        </div>
        <button onclick="toggleItem(${index})">Select</button>
      `;
      menuList.appendChild(div);
    });
  }
  
  function toggleItem(index) {
    const item = menuItems[index];
    if (selectedItems.has(index)) {
      selectedItems.delete(index);
      totalCalories -= item.calories;
    } else {
      selectedItems.add(index);
      totalCalories += item.calories;
    }
    document.getElementById("totalCalories").textContent = totalCalories;
  }
  
  function placeOrder() {
    if (selectedItems.size === 0) {
      alert("Select at least one item.");
      return;
    }
    alert("Order placed successfully!");
    selectedItems.clear();
    totalCalories = 0;
    document.getElementById("totalCalories").textContent = 0;
  }
  
  document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("feedbackMsg").innerHTML = "<p>Thank you for your feedback!</p>";
    this.reset();
  });
  
  // Simulate waste meter
  function updateWasteMeter() {
    document.getElementById("savedFood").textContent = (Math.random() * 10 + 5).toFixed(2);
    document.getElementById("wastedFood").textContent = (Math.random() * 5).toFixed(2);
  }
  
  renderMenu();
  updateWasteMeter();