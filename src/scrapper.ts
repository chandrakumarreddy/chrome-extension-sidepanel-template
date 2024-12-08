// Example: Scraping the page title
const data = {
  title: document.title,
  url: window.location.href,
};

// Save data to extension storage
chrome.storage.local.set({ scrapedData: data }, () => {
  console.log("Data saved:", data);
});

// Log the data (for debugging)
console.log("Scraped Data:", data);
