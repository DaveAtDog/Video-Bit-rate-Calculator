window.log = function () {
	if (this.console) console.log(Array.prototype.slice.call(arguments));
};


var ractive = new Ractive({
	el: '#output',
	template: '#template',
	data: {
		videoFileSize: 9,
		videoLength: 120,
		totalBitrate: 0,
		videoBitrate: 400,
		audioBitrate: 80,
		format: function (num) {
			return Math.floor(num);
		}
	}
});

ractive.observe('videoFileSize', function () {
	log('videoFileSize');
	calculateBitrate()
});

ractive.observe('videoLength', function () {
	log('videoLength');
	calculateBitrate()
});

function calculateBitrate() {
	log('calculateBitrate', ractive.data.videoFileSize, ractive.data.videoLength);

	ractive.set('totalBitrate', (ractive.data.videoFileSize / ractive.data.videoLength) * 8192);
	ractive.set('videoBitrate', ractive.data.totalBitrate - ractive.data.audioBitrate);
}


log(ractive);
