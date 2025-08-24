const ws = new WebSocket("ws://localhost:8080");
const statusEl = document.getElementById("status");
const logContainer = document.getElementById("logContainer");
//show messages when unpaused
let paused = false;
//server connected
ws.onopen = () => {
  console.log("Connected to server");
};
//if receive new log
ws.onmessage = (event) => {
//dont show if paused
  if (paused) return;
  const log = JSON.parse(event.data);
  const div = document.createElement("div");
  div.className = `log-${log.level}`;
  //display log message in log container dv
  div.textContent = `[${log.timestamp}] ${log.level}: ${log.message}`;
  logContainer.appendChild(div);

// Auto-scroll implementation, only use if user is at bottom
  if (logContainer.scrollTop + logContainer.clientHeight >= logContainer.scrollHeight - 5) {
    logContainer.scrollTop = logContainer.scrollHeight;
  }
};
//button event handling
document.getElementById("pauseBtn").onclick = () => {
  paused = true;
  statusEl.textContent = "Status: Paused";
};

document.getElementById("resumeBtn").onclick = () => {
  paused = false;
  statusEl.textContent = "Status: Running";
};

document.getElementById("clearBtn").onclick = () => {
  logContainer.innerHTML = "";
};