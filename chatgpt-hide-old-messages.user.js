// ==UserScript==
// @name         ChatGPT: Hide Old Messages
// @namespace    https://github.com/Trycky64/ChatgptRenderOptimizer
// @version      1.0
// @description  Limits the number of visible messages in ChatGPT to improve performance in long conversations. Includes a toggle button to show/hide all messages dynamically.
// @author       Trycky64
// @match        https://chatgpt.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  const DEFAULT_VISIBLE_COUNT = 10;
  let visibleCount = DEFAULT_VISIBLE_COUNT;
  let isActive = true;

  function updateVisibility() {
    if (!isActive) return;

    const messages = Array.from(document.querySelectorAll('article[data-testid^="conversation-turn"]'));
    const total = messages.length;

    if (total > visibleCount) {
      messages.slice(0, total - visibleCount).forEach(el => {
        el.style.display = 'none';
      });
      messages.slice(total - visibleCount).forEach(el => {
        el.style.display = '';
      });
    } else {
      messages.forEach(el => {
        el.style.display = '';
      });
    }
  }

  const observer = new MutationObserver(updateVisibility);
  const waitForContainer = setInterval(() => {
    const container = document.querySelector('main');
    if (container) {
      observer.observe(container, { childList: true, subtree: true });
      clearInterval(waitForContainer);
    }
  }, 500);

  const button = document.createElement('button');
  button.textContent = 'Hide Old Messages';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '9999';
  button.style.padding = '8px 12px';
  button.style.borderRadius = '6px';
  button.style.background = '#333';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.fontFamily = 'sans-serif';
  button.style.fontSize = '14px';

  button.onclick = () => {
    isActive = !isActive;
    updateVisibility();
    button.textContent = isActive ? 'Hide Old Messages' : 'Show All Messages';
  };

  document.body.appendChild(button);
})();
