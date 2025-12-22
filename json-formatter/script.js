const input = document.getElementById("jsonInput");
const output = document.getElementById("jsonOutput");
const indentSelect = document.getElementById("indentSize");
const toast = document.getElementById("toast");

function showToast(message, error = false) {
  toast.textContent = message;
  toast.style.background = error ? "#dc2626" : "#0f172a";
  toast.classList.add("show");

  setTimeout(() => toast.classList.remove("show"), 2500);
}

function formatJson() {
  if (!input.value.trim()) {
    showToast("Please enter some JSON", true);
    return;
  }

  try {
    const parsed = JSON.parse(input.value);
    const indent = indentSelect.value === "1" ? "\t" : Number(indentSelect.value);
    output.textContent = JSON.stringify(parsed, null, indent);
    showToast("JSON formatted successfully");
  } catch (e) {
    output.textContent = "Invalid JSON\n\n" + e.message;
    showToast("Invalid JSON", true);
  }
}

function minifyJson() {
  try {
    const parsed = JSON.parse(input.value);
    output.textContent = JSON.stringify(parsed);
    showToast("JSON minified");
  } catch (e) {
    showToast("Invalid JSON", true);
  }
}

function validateJson() {
  try {
    JSON.parse(input.value);
    output.textContent = "✅ Valid JSON";
    showToast("Valid JSON");
  } catch (e) {
    output.textContent = "❌ Invalid JSON\n\n" + e.message;
    showToast("Invalid JSON", true);
  }
}

function clearAll() {
  input.value = "";
  output.textContent = "";
}
