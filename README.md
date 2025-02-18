# Ultimate Advanced Ad Blocker

A comprehensive ad blocking Chrome extension that blocks ads at both the network and DOM levels, providing a clean browsing experience.

## Features

- **Network-level blocking**: Blocks ad requests before they reach your browser
- **DOM-level filtering**: Removes ads that slip through network blocking
- **Real-time statistics**: Tracks number of ads blocked
- **Custom filters**: Add your own filters through the options page
- **Automatic updates**: Detects and removes newly injected ads
- **Lightweight**: Minimal impact on browser performance

## Installation

1. Download the `supreme-ad-blocker.zip` file
2. Open Chrome or Chromium browser
3. Go to `chrome://extensions/`
4. Enable Developer mode (toggle in top right corner)
5. Drag and drop the zip file into the extensions page
6. The extension should install and be ready for use

## Usage

- Click the extension icon to view blocked ads count
- Access settings via the options page to:
  - Add custom filters (one per line)
  - Reset statistics
- The extension works automatically in the background

## File Structure

- `background.js`: Handles network-level blocking and statistics
- `content.js`: Removes ads from web pages
- `popup.html`: Popup interface
- `popup.js`: Popup functionality
- `options.html`: Settings page
- `options.js`: Settings functionality
- `filters.json`: Default ad filters
- `manifest.json`: Extension metadata
- `style.css`: Styling for popup and options pages

## Contributing

Contributions are welcome! Please open an issue or pull request for any improvements or bug fixes.

## License

MIT License
