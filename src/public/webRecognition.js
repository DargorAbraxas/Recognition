let recognition;
let recognizing = false;
let final_transcript = "";
let interim_transcript = "";

recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
// recognition.lang = 'ar-lb';
// recognition.lang = 'es-ec';
recognition.continuous = true;
recognition.interimResults = true;

recognition.onstart = function() {
	recognizing = true;
}

recognition.onend = function () {
	recognizing = false;
	if (ignore_onend) {
		return;
	}
	if (window.getSelection) {
		window.getSelection().removeAllRanges();
		var range = document.createRange();
		range.selectNode(document.getElementById('final_span'));
		window.getSelection().addRange(range);
	}
}

recognition.onresult = function(event) {
	final_transcript = ""
	for (var i = event.resultIndex; i < event.results.length; ++i) {
		if (event.results[i].isFinal) {
			final_transcript += event.results[i][0].transcript;
		} else {
			interim_transcript += event.results[i][0].transcript;
		}
	}
	final_span.innerHTML = final_transcript;
}

$('#btn_start').click(function(e) {
	if (recognizing) {
    recognition.stop();
    return;
  }
	recognition.start();
	ignore_onend = false;
});
