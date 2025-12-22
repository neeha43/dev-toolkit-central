const colorInput = document.getElementById("colorInput");
const hexInput = document.getElementById("hexInput");
const colorPreview = document.getElementById("colorPreview");
const output = document.getElementById("output");
const presetContainer = document.getElementById("presetColors");
const randomBtn = document.getElementById("randomBtn");

const presetColors = [
  "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7",
  "#dfe6e9", "#00b894", "#6c5ce7", "#fd79a8", "#e17055",
  "#00cec9", "#0984e3", "#b2bec3", "#2d3436", "#ffffff",
];

function hexToRgb(hex) {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return match
    ? {
        r: parseInt(match[1], 16),
        g: parseInt(match[2], 16),
        b: parseInt(match[3], 16),
      }
    : null;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function rgbToCmyk(r, g, b) {
  if (r === 0 && g === 0 && b === 0) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  const c = 1 - r / 255;
  const m = 1 - g / 255;
  const y = 1 - b / 255;
  const k = Math.min(c, m, y);

  return {
    c: Math.round(((c - k) / (1 - k)) * 100),
    m: Math.round(((m - k) / (1 - k)) * 100),
    y: Math.round(((y - k) / (1 - k)) * 100),
    k: Math.round(k * 100),
  };
}

function updateOutput(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    output.textContent = "Invalid color";
    return;
  }

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

  output.textContent = `
HEX: ${hex.toUpperCase()}
RGB: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})
RGBA: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)
HSL: hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)
HSLA: hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1)
CMYK: cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)

CSS Variables:
--color: ${hex};
--color-rgb: ${rgb.r}, ${rgb.g}, ${rgb.b};
--color-hsl: ${hsl.h}, ${hsl.s}%, ${hsl.l}%;
`.trim();
}

function setColor(hex) {
  if (!hex.startsWith("#")) hex = "#" + hex;
  colorInput.value = hex;
  hexInput.value = hex;
  colorPreview.style.background = hex;
  updateOutput(hex);
}

presetColors.forEach((color) => {
  const div = document.createElement("div");
  div.className = "preset";
  div.style.background = color;
  div.title = color;
  div.onclick = () => setColor(color);
  presetContainer.appendChild(div);
});

colorInput.addEventListener("input", (e) => setColor(e.target.value));
hexInput.addEventListener("input", (e) => setColor(e.target.value));

randomBtn.addEventListener("click", () => {
  const random =
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  setColor(random);
});

setColor("#00d4ff");
