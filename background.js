
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      //Comprueba si hay cambios en al web y manda una señal
        chrome.tabs.sendMessage( tabId, {
        message: 'change'
            })           
    });


  chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {
    //Comprueba si hay cambios en al web y manda una señal
      chrome.tabs.sendMessage( tabId, {
      message: 'change'
          })           
  });



  