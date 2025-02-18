// Popup script for Ultimate Advanced Ad Blocker

// Get DOM elements
const blockedCountElement = document.getElementById('blockedCount');
const refreshFiltersButton = document.getElementById('refreshFilters');
const openOptionsButton = document.getElementById('openOptions');

// Get blocked count from background script
chrome.runtime.sendMessage({ action: 'getStats' }, (response) => {
  blockedCountElement.textContent = response.blockedCount || 0;
});

// Handle refresh filters button click
refreshFiltersButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'reloadFilters' });
  blockedCountElement.textContent = '0';
});

// Handle open options button click
openOptionsButton.addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});
