function updateBadge() {
  fetch('https://vibehut.io/api/v1/public/calls/active-calls', {
    headers: {
      'api-key': '55221ae45adfd8eee24bf704e3f05c1d'
    }
  })
  .then(res => res.json())
  .then(data => {
    const count = data.data.length.toString();
    chrome.action.setBadgeText({ text: count });
    chrome.action.setBadgeBackgroundColor({ color: 'rgb(113, 109, 255)' });
    chrome.action.setBadgeTextColor({ color: 'white' });
  })
  .catch(console.error);
}

// Update badge every 20 seconds
updateBadge();
setInterval(updateBadge, 20000); 