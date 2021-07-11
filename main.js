

function start(){
    var synth = window.speechSynthesis;
    speech= document.getElementById("text").value;
    var utterThis = new SpeechSynthesisUtterance(speech);  
    utterThis.lang='en-US';
    synth.speak(utterThis);
}


