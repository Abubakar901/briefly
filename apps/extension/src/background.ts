
chrome.runtime.onInstalled.addListener(() => {
  console.log("Briefly installed");
});

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.id === undefined) return;

  await chrome.sidePanel.open({ tabId: tab.id });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "PAGE_CONTENT") {
    console.log("Briefly received page content:", {
      tabId: sender.tab?.id,
      title: message.payload.title,
      textLength: message.payload.text.length,
      sections: message.payload.sections.length,
    });
  }
});
