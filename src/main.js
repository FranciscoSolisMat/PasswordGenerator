document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("generateBtn").addEventListener("click", function(){
  	chrome.runtime.sendMessage({
  from: 'generatePwd',
  subject: document.getElementById('length').value + "",
});
  });
});

