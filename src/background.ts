// @ts-nocheck

chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
  chrome.sidePanel
    .open({ tabId: tab.id })
    .catch((error) => console.error("Error opening sidepanel:", error));
});
