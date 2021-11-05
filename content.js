const key = 'stor';
var result1;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === 'change') { //comprueba que está encendido el interruptor
        //console.log('1')
        chrome.storage.local.get([key], (result) => {
            result1=result.stor;
            //console.log('Retrieved name en content.js: ' + result1);
          });
          function getValue(callback) {
            chrome.storage.sync.get("stor", callback);
          }
          getValue(function(value) {
          
          result1=value;
          result1=result1.stor;
          //console.log("Result1= "+result1)

            if (result1=="on"){
            //console.log(request.url) 
            ;(function() {
                //console.log('Iniciando extensión')
            })()
            
            ;(function() {
                //console.log('Ejecutando función principal')
                function hidePer() { //Elimina la sección de simulacros
                    //console.log('Ejecutando función hidePer')
                    var elements = document.getElementsByClassName("col-sm-3")
                    while(elements.length > 0){
                        elements[0].parentNode.removeChild(elements[0])
                    }
    
                    //console.log('Fin función hidePer');
                    
                }
                function espera () {
                    //console.log('Ejecutando espera')
                    const el = document.getElementsByClassName("row ng-scope");
                
                    if (el.length) {
                        //console.log('Encontrado la parte de simulacros')
                        hidePer()
                    } else {
                        //console.log('No encontrado el parte de simulacros')
                        setTimeout(espera, 300); // Espera 300ms y ejecuta de nuevo la función
                    }
                }
                espera();


                    })()
                };
            


          });
          
        
                
        }; 
  });

