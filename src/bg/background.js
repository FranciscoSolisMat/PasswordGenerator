// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  if (msg.from === 'generatePwd' && msg.subject) {
    // Enable the page-action for the requesting tab.
    let size = parseInt(msg.subject) ?? 64;
    let randPassword = Array(size).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.*_-,;$#%&!").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
	
prompt('Generated Password:', randPassword);
  }
});
