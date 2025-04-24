# ChatGPT: Hide Old Messages

A userscript designed to improve performance and responsiveness in long ChatGPT conversations by limiting the number of rendered messages. When interacting with large threads (50+ messages), ChatGPT can experience significant lag as the entire conversation history is rendered in the browser. This script mitigates that by keeping only the latest messages visible.

## Purpose

ChatGPT does not currently virtualize or dynamically load messages in large conversations. As a result, extended threads can lead to performance degradation — especially on lower-end machines or during fast-paced interactions. This script addresses the issue by:

- Dynamically hiding older messages from the DOM
- Reducing the rendering and layout load on the browser
- Preserving full conversation context on the backend while optimizing frontend responsiveness

## Features

- Automatically displays only the most recent messages (default: 10)
- Dynamically updates as new messages are added
- Provides a fixed-position toggle button to switch between limited and full view
- Non-intrusive design with no modifications to ChatGPT’s native interface

## Installation

1. Install a userscript manager:
   - [Tampermonkey](https://www.tampermonkey.net/)
   - [Violentmonkey](https://violentmonkey.github.io/)

2. Install the script:
   - Direct installation link: 
   - Or copy the contents of `chatgpt-hide-old-messages.user.js` into a new userscript

3. Navigate to https://chat.openai.com. The script will run automatically.

## Configuration

You can adjust the number of visible messages by modifying the `DEFAULT_VISIBLE_COUNT` constant at the top of the script:

## Configuration

You can adjust the number of visible messages by modifying the `DEFAULT_VISIBLE_COUNT` constant at the top of the script:

```javascript
const DEFAULT_VISIBLE_COUNT = 10;
```

To view all messages at any time, use the floating toggle button added to the bottom-right corner of the page.

## Limitations

- This script only modifies client-side rendering; no messages are deleted or lost.
- The toggle resets on page reload.
- The performance gain depends on the size of the conversation and system/browser resources.

## License

This project is open-sourced under the MIT License. You are free to use, modify, and distribute this script under the terms of the license.

---
Let me know if you need help customizing it further, like adding badges, links, or GitHub Pages setup.
