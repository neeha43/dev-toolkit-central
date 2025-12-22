const currentTimestampEl = document.getElementById("currentTimestamp");
const currentDateEl = document.getElementById("currentDate");
const timestampInput = document.getElementById("timestampInput");
const dateInput = document.getElementById("dateInput");
const output = document.getElementById("output");

// Live current time
setInterval(() => {
  const now = Date.now();
  currentTimestampEl.textContent = now;
  currentDateEl.textContent = new Date(now).toLocaleString();
}, 1000);

function convertTimestamp() {
  const value = timestampInput.value.trim();
  if (!value) {
    alert("Please enter a timestamp");
    return;
  }

  try {
    let ts = parseInt(value, 10);

    if (ts.toString().length === 10) {
      ts *= 1000;
    }

    const date = new Date(ts);
    if (isNaN(date.getTime())) throw new Error();

    output.value = [
      `Timestamp: ${value}`,
      `Milliseconds: ${ts}`,
      `Seconds: ${Math.floor(ts / 1000)}`,
      "",
      "Date Formats:",
      `ISO 8601: ${date.toISOString()}`,
      `UTC: ${date.toUTCString()}`,
      `Local: ${date.toLocaleString()}`,
      `Date only: ${date.toLocaleDateString()}`,
      `Time only: ${date.toLocaleTimeString()}`,
      "",
      "Components:",
      `Year: ${date.getFullYear()}`,
      `Month: ${date.getMonth() + 1}`,
      `Day: ${date.getDate()}`,
      `Hour: ${date.getHours()}`,
      `Minute: ${date.getMinutes()}`,
      `Second: ${date.getSeconds()}`,
      `Day of Week: ${date.toLocaleString('en', { weekday: 'long' })}`
    ].join("\n");
  } catch {
    output.value =
      "Error: Invalid timestamp\n\nPlease enter a valid Unix timestamp (seconds or milliseconds)";
  }
}

function convertDate() {
  const value = dateInput.value;
  if (!value) {
    alert("Please enter a date");
    return;
  }

  try {
    const date = new Date(value);
    if (isNaN(date.getTime())) throw new Error();

    const ts = date.getTime();
    output.value = [
      `Input: ${value}`,
      "",
      "Timestamps:",
      `Milliseconds: ${ts}`,
      `Seconds: ${Math.floor(ts / 1000)}`,
      "",
      "Date Formats:",
      `ISO 8601: ${date.toISOString()}`,
      `UTC: ${date.toUTCString()}`,
      `Local: ${date.toLocaleString()}`
    ].join("\n");
  } catch {
    output.value =
      "Error: Invalid date\n\nPlease enter a valid date string";
  }
}

function useCurrentTime() {
  timestampInput.value = Date.now().toString();
}

function clearAll() {
  timestampInput.value = "";
  dateInput.value = "";
  output.value = "";
}
