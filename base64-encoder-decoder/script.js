let mode = "text";

const textMode = document.getElementById("textMode");
const fileMode = document.getElementById("fileMode");
const textBtn = document.getElementById("textModeBtn");
const fileBtn = document.getElementById("fileModeBtn");
const textInput = document.getElementById("textInput");
const output = document.getElementById("output");
const fileInput = document.getElementById("fileInput");

function setMode(newMode) {
  mode = newMode;

  if (mode === "text") {
    textMode.classList.remove("hidden");
    fileMode.classList.add("hidden");
    textBtn.classList.add("active");
    fileBtn.classList.remove("active");
  } else {
    textMode.classList.add("hidden");
    fileMode.classList.remove("hidden");
    fileBtn.classList.add("active");
    textBtn.classList.remove("active");
  }
}

function encode() {
  if (!textInput.value.trim()) {
    alert("Please enter some text to encode");
    return;
  }
  try {
    output.value = btoa(unescape(encodeURIComponent(textInput.value)));
  } catch {
    output.value = "Error: Failed to encode input";
  }
}

function decode() {
  if (!textInput.value.trim()) {
    alert("Please enter some Base64 to decode");
    return;
  }
  try {
    const clean = textInput.value.replace(/\s/g, "");
    output.value = decodeURIComponent(escape(atob(clean)));
  } catch {
    output.value = "Error: Invalid Base64 string";
  }
}

function clearAll() {
  textInput.value = "";
  output.value = "";
}

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result.split(",")[1];
    output.value = base64;
  };
  reader.readAsDataURL(file);
});
