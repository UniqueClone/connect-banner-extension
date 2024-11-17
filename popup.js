document.getElementById("removeButton").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "removeElements" });
});
