// Options script for Ultimate Advanced Ad Blocker

// Get DOM elements
const customFiltersTextarea = document.getElementById('customFilters');
const saveFiltersButton = document.getElementById('saveFilters');
const totalBlockedElement = document.getElementById('totalBlocked');
const resetStatsButton = document.getElementById('resetStats');

// Load current filters
chrome.storage.local.get(['filters'], (result) => {
  if (result.filters) {
    customFiltersTextarea.value = result.filters.join('\n');
  }
});

// Load blocked count
chrome.storage.local.get(['blockedCount'], (result) => {
  totalBlockedElement.textContent = result.blockedCount || 0;
});

// Handle save filters button click
saveFiltersButton.addEventListener('click', () => {
  const filters = customFiltersTextarea.value
    .split('\n')
    .filter(line => line.trim() !== '');
  
  chrome.storage.local.set({ filters }, () => {
    // Notify background script to reload filters
    chrome.runtime.sendMessage({ action: 'reloadFilters' });
    alert('Filters saved successfully!');
  });
});

// Handle reset stats button click
resetStatsButton.addEventListener('click', () => {
  chrome.storage.local.set({ blockedCount: 0 }, () => {
    totalBlockedElement.textContent = '0';
    alert('Statistics reset successfully!');
  });
});
