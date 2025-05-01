document.addEventListener("DOMContentLoaded", () => {
    // Room Allocation
    const floorPlan = document.getElementById("floorPlan");
    const selectedRoomEl = document.getElementById("selectedRoom");
    let selectedRoom = null;
  
    for (let i = 101; i <= 125; i++) {
      const room = document.createElement("div");
      room.className = "room";
      room.textContent = Room ${i};
      room.onclick = () => {
        document.querySelectorAll(".room").forEach(r => r.classList.remove("selected"));
        room.classList.add("selected");
        selectedRoom = i;
        selectedRoomEl.textContent = i;
      };
      floorPlan.appendChild(room);
    }
  
    // Roommate Matching (dummy logic)
    const matchForm = document.getElementById("matchForm");
    const matchResult = document.getElementById("matchResult");
  
    matchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = this.querySelector("input[type='text']").value.trim();
      const language = this.querySelector("select").value;
      const interests = this.querySelectorAll("input[type='text']")[1].value;
      const course = this.querySelectorAll("input[type='text']")[2].value;
  
      if (!name || !language || !interests || !course) {
        matchResult.innerHTML = "<p style='color:red;'>Please fill all fields correctly.</p>";
        return;
      }
  
      matchResult.innerHTML =
        "<p><strong>Suggested Roommate:</strong> Rahul - Same course & similar interests.</p>";
      this.reset();
    });
  
    // Maintenance Request Tracker
    const maintenanceForm = document.getElementById("maintenanceForm");
    const maintenanceList = document.getElementById("maintenanceList");
  
    maintenanceForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const room = this.querySelector("input").value.trim();
      const issue = this.querySelector("textarea").value.trim();
  
      if (!room || !issue) {
        alert("Please fill in both fields.");
        return;
      }
  
      const div = document.createElement("div");
      div.innerHTML = <p><strong>Room ${room}:</strong> ${issue} (Pending)</p>;
      maintenanceList.appendChild(div);
      this.reset();
    });
  
    // Guest Visitor Registration
    const visitorForm = document.getElementById("visitorForm");
    const visitorList = document.getElementById("visitorList");
  
    visitorForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const visitor = this.querySelectorAll("input")[0].value.trim();
      const student = this.querySelectorAll("input")[1].value.trim();
      const date = this.querySelectorAll("input")[2].value;
  
      if (!visitor || !student || !date) {
        alert("Please fill all visitor details.");
        return;
      }
  
      const entry = document.createElement("div");
      entry.innerHTML = <p>${visitor} visiting ${student} on ${date}</p>;
      visitorList.appendChild(entry);
      this.reset();
    });
  });