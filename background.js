chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "removeElements") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const activeTabId = tabs[0].id;
        chrome.scripting.executeScript({
          target: { tabId: activeTabId },
          files: ["content.js"],
        });
      } else {
        console.error("No active tab found.");
      }
    });
  }
});
