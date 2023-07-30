export function textToSpeech(text) {
  // check if browser supports text to speech
  if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
  } else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
  }
  if (text !== '') {
    //text to speech
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
}
