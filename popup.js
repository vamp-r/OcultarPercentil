const key = 'stor';
var result1="global";
function getValue(callback) {
  chrome.storage.sync.get("stor", callback);
}
getValue(function(value) {

result1=value;
result1=result1.stor;
//console.log("Result1= "+result1);
if (result1=="on"){
  //console.log("Abierto")
  document.getElementById("accept").checked = true; //cambia la posición del botón
}else{
  //console.log("Cerrado")
  document.getElementById("accept").checked = false;
};
});



//console.log("Result1= "+result1);
var checkbox = document.querySelector("input[name=accept]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    chrome.storage.sync.set({"stor": "on"}, () => {
    });
    //console.log("Checkbox is checked..");

    function getValue(callback) {
      chrome.storage.sync.get("stor", callback);
   }
   getValue(function(value) {
    //console.log(value);
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
      chrome.tabs.reload(arrayOfTabs[0].id);
  });
 });
  } else {
    chrome.storage.sync.set({"stor": "off"}, () => {
    });
    //console.log("Checkbox is not checked..");

    function getValue(callback) {
      chrome.storage.sync.get("stor", callback);
   }
   getValue(function(value) {
    //console.log(value);
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
      chrome.tabs.reload(arrayOfTabs[0].id);
  });
    
 });
  }
});

