// Content script for Ultimate Advanced Ad Blocker

// Function to remove elements matching selectors
function removeElements(selectors) {
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => element.remove());
  });
}

// Common ad selectors
const adSelectors = [
  'iframe[src*="ads"]',
  'div[class*="ad"]',
  'div[class*="banner"]',
  'div[class*="sponsor"]',
  'div[class*="promo"]',
  'div[class*="advertisement"]',
  'div[id*="ad"]',
  'div[id*="banner"]',
  'div[id*="sponsor"]',
  'div[id*="promo"]',
  'div[id*="advertisement"]'
];

// Initial removal of ads
removeElements(adSelectors);

// Observe DOM changes to remove new ads
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      removeElements(adSelectors);
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'reloadFilters') {
    // Handle filter reload if needed
  }
});
