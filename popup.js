// Adapted from Change Background Color Tutorial from Google
// https://developer.chrome.com/extensions/getstarted
// Employs the mashape text-summarizer API - free for 100 calls per day, then costs $$$
// API disbaled after class so we do not run up the bill! CAn re-eneable on request

/**
 * Get the current URL. Directly taken from getting started tutorial
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

// Wrote all code here, with basic structure of XMLHttpRequest references in docs
// API docs here: https://market.mashape.com/textanalysis/text-summarization
document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var button = document.getElementById('summarize');

    button.addEventListener('click', () => {
      document.getElementById("content").value = "Results pending";
      document.getElementById("summarize").style.display = "none";
      document.getElementById("content").style.display = "block";

      var http = new XMLHttpRequest();
      var post_url = "https://textanalysis-text-summarization.p.mashape.com/text-summarizer";
      var params = JSON.stringify(
        { "url": url,
          "text": "",
          "sentnum": 8
        });
      http.open("POST", post_url, true);

      //Send the proper headers
      http.setRequestHeader("X-Mashape-Key", "bdkY667NENmshfEl6lOW8rU2FYflp1tFzTDjsnNHoOftxwn0UM");
      http.setRequestHeader("Content-Type","application/json");
      http.setRequestHeader("Accept","application/json");

      http.onreadystatechange = function() {
          if(http.readyState == 4 && http.status == 200) {
            res = JSON.parse(http.responseText)
            document.getElementById("content").value = res['sentences'];
          }
      }
      http.send(params);
    });
  });
});
