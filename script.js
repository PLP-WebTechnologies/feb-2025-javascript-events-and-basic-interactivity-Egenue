// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverArea").addEventListener("mouseover", () => {
  document.getElementById("hoverArea").style.backgroundColor = "lightgreen";
});

document.getElementById("hoverArea").addEventListener("mouseout", () => {
  document.getElementById("hoverArea").style.backgroundColor = "#ddd";
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log("Key pressed:", e.key);
});

document.getElementById("clickBtn").addEventListener("dblclick", () => {
  alert("🎉 Double-click detected! Secret action activated!");
});

// Long-press detection
let pressTimer;
const longPressBtn = document.getElementById("longPressBtn");
longPressBtn.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    alert("Long press detected!");
  }, 1000);
});
longPressBtn.addEventListener("mouseup", () => clearTimeout(pressTimer));
longPressBtn.addEventListener("mouseleave", () => clearTimeout(pressTimer));

// Interactive Elements
document.getElementById("changeColorBtn").addEventListener("click", () => {
  const box = document.getElementById("colorBox");
  box.style.backgroundColor = box.style.backgroundColor === "coral" ? "skyblue" : "coral";
});

let imageIndex = 1;
function nextImage() {
  imageIndex = (imageIndex % 3) + 1;
  document.getElementById("galleryImage").src =
    \`https://via.placeholder.com/300x200?text=Image+\${imageIndex}\`;
}

function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

// Trigger animation
function triggerAnimation() {
  const box = document.getElementById('animatedBox');
  box.classList.remove('fade-in');
  void box.offsetWidth;
  box.classList.add('fade-in');
}

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    feedback.textContent = "❌ Invalid email format.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "❌ Password must be at least 8 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "✅ All good! Form submitted.";
  feedback.style.color = "green";
});
