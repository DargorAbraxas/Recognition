$('#btn_start').click(function(e){
	console.log("Start click");
	init_recognition();

    // if (nowRecognition){
	// rec_stop();
	// this.value = 'スタート';
	// $('#btn_start').css('background','#ffffff');
	// if(!isAuto){
	//     var data = {
	// 	'id': getUniqID(),
	// 	'text': results.join('。'),
	// 	'conf': 1.00,
	// 	'spk_id':'default',
	// 	'label':'speech'
	//     };
	//     emit(JSON.stringify(data));
	//     results = [];
	// }
    // } else {
	// rec_start();
	// this.value = 'ストップ';
	// $('#btn_start').css('background','#ff0000');
    // }
});

function init_recognition() {
	let recognition;
	recognition = new webkitSpeechRecognition();
	recognition.lang = 'en-US';
	recognition.continuous = true;
    recognition.interimResults = true;
}
