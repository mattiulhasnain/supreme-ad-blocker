// Background script for Ultimate Advanced Ad Blocker

// Load filters from storage or default filters
let filters = [];

// Load filters from storage
chrome.storage.local.get(['filters'], (result) => {
  if (result.filters) {
    filters = result.filters;
  } else {
    // Load default filters if none are stored
    fetch(chrome.runtime.getURL('filters.json'))
      .then(response => response.json())
      .then(data => {
        filters = data.filters;
        chrome.storage.local.set({ filters: data.filters });
      });
  }
});

// Listen for web requests
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = details.url;
    
    // Check if URL matches any filter
    for (const filter of filters) {
      const regex = new RegExp(filter);
      if (regex.test(url)) {
        return { cancel: true };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// Track blocked requests
let blockedCount = 0;

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    blockedCount++;
    chrome.storage.local.set({ blockedCount });
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// Handle messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getStats') {
    chrome.storage.local.get(['blockedCount'], (result) => {
      sendResponse({ blockedCount: result.blockedCount || 0 });
    });
    return true; // Keep the message channel open for async response
  }
});

// Update badge with blocked count
chrome.storage.onChanged.addListener((changes) => {
  if (changes.blockedCount) {
    chrome.action.setBadgeText({
      text: changes.blockedCount.newValue.toString()
    });
  }
});
