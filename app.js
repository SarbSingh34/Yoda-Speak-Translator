var btn = document.getElementById("btn-translate");
var txt = document.getElementById("text-input"); 
var txtoutput = document.getElementById("text-output"); 


var serverurl = "https://api.funtranslations.com/translate/yoda.json";

 function getranslationurl(text)
 {
     return serverurl + "?" + "text=" + text 
 }

  btn.addEventListener("click",function clickHandler()
{

    var inputext = txt.value;

     fetch(getranslationurl(inputext))
     .then(response => response.json())
     .then(json =>
    {
        var translatedText = json.contents.translated;
        txtoutput.innerText = translatedText;
    })

  
});



