let currentURL = window.location.href;
let isNewReddit = /reddit/i.test(currentURL);

if (isNewReddit) switchToOldReddit();

function switchToOldReddit() {
  let newURL = currentURL.replace(/\bwww\./, "old.");
  window.location.replace(newURL);
}
