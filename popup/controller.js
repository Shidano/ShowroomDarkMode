function change() {
    var queryInfo = {
        active: true,
        currentWindow: true,
    };
    var target = "https://www.showroom-live.com/";
    chrome.tabs.query(queryInfo, function (tabs) {
        var tab = tabs[0];
        if (!(tab.url.indexOf(target) == -1)) {
            if (tab.url.indexOf("?") == -1) {
                var nexturl = tab.url + "?lm";
            } else if (tab.url.indexOf("?lm", tab.url.length - 3) == -1 && tab.url.indexOf("&lm", tab.url.length - 3) == -1) {
                var nexturl = tab.url + "&lm";
            } else {
                var nexturl = tab.url.slice(0,tab.url.length-3);
            }
            chrome.tabs.update(tab.ID, { url: nexturl });
        }
    });
}

document.addEventListener("DOMContentLoaded", function () { document.getElementById("button").addEventListener("click", change) });