const patternEl = document.getElementById("pattern");
const flagsEl = document.getElementById("flags");
const testStringEl = document.getElementById("testString");
const outputEl = document.getElementById("output");

function toggleFlag(flag) {
  let flags = flagsEl.value;
  if (flags.includes(flag)) {
    flags = flags.replace(flag, "");
  } else {
    flags += flag;
  }
  flagsEl.value = flags;
  updateFlagButtons();
}

function updateFlagButtons() {
  ["g", "i", "m", "s"].forEach(f => {
    document
      .getElementById(`flag-${f}`)
      .classList.toggle("active", flagsEl.value.includes(f));
  });
}

function testRegex() {
  const pattern = patternEl.value;
  const flags = flagsEl.value;
  const text = testStringEl.value;

  if (!pattern || !text) {
    alert("Please enter both pattern and test string");
    return;
  }

  try {
    const regex = new RegExp(pattern, flags);
    const matches = text.match(regex);

    let result = "";

    if (matches && matches.length) {
      result += `✅ ${matches.length} match${matches.length > 1 ? "es" : ""} found\n\n`;
      result += "Matches:\n";
      matches.forEach((m, i) => {
        result += `  ${i + 1}. "${m}"\n`;
      });

      result += "\nPositions:\n";
      const rg = new RegExp(pattern, flags.includes("g") ? flags : flags + "g");
      let match, index = 0;
      while ((match = rg.exec(text)) !== null) {
        index++;
        result += `  ${index}. Index ${match.index}: "${match[0]}"\n`;
        if (match.index === rg.lastIndex) rg.lastIndex++;
      }

      const groupRegex = new RegExp(pattern, flags.replace("g", ""));
      const groupMatch = text.match(groupRegex);
      if (groupMatch && groupMatch.length > 1) {
        result += "\nCapture Groups:\n";
        for (let i = 1; i < groupMatch.length; i++) {
          result += `  Group ${i}: "${groupMatch[i] || ""}"\n`;
        }
      }
    } else {
      result = "❌ No matches found";
    }

    outputEl.value = result;
  } catch (e) {
    outputEl.value = `Error: Invalid regex pattern\n\n${e.message}`;
  }
}

function replaceMatches() {
  const replacement = prompt("Enter replacement string (use $1, $2 for groups):");
  if (replacement === null) return;

  try {
    const regex = new RegExp(patternEl.value, flagsEl.value);
    const result = testStringEl.value.replace(regex, replacement);
    outputEl.value = `Replaced result:\n\n${result}`;
  } catch (e) {
    outputEl.value = `Error: ${e.message}`;
  }
}

function clearAll() {
  patternEl.value = "";
  flagsEl.value = "g";
  testStringEl.value = "";
  outputEl.value = "";
  updateFlagButtons();
}

updateFlagButtons();
