var contextMenuItem = {
    "id": "searchQuizlet",
    "title": "[Search using Quizlet.com]",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);
console.log("Loaded the plugin");


chrome.contextMenus.onClicked.addListener(function (clickData){
    console.log("Loaded the onClicked");
    const inputString = clickData.selectionText;
    console.log(clickData.selectionText);
    let quizletURL = "https://www.google.com/search?q=site%3Aquizlet.com+"+ inputString;
    window.open(quizletURL);
});

