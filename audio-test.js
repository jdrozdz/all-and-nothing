var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

const p1 = document.createElement('div');
p1.setAttribute('data-video','bE2r7r7VVic');
p1.setAttribute('data-autoplay',1);
p1.setAttribute('data-loop', 0);
p1.id='soad1';
document.body.appendChild(p1);
	
const ctrlq1 = document.getElementById("soad1");
ctrlq1.innerHTML = '<div id="youtube-player1"></div>';
ctrlq1.style.cssText = 'width:1px;margin:2em auto;cursor:pointer;cursor:hand;display:none; position:absolute: top:0;left:0';
ctrlq1.onclick = toggleAudio1;

const player1 = new YT.Player('soad1', {
	height: '0',
	width: '0',
	videoId: ctrlq1.dataset.video,
	playerVars: {
		autoplay: ctrlq1.dataset.autoplay,
		loop: ctrlq1.dataset.loop,
	},
	events: {
		'onReady': onPlayerReady1,
		'onStateChange': onPlayerStateChange1 
	} 
});

function onPlayerReady1(event) {
	//player1.setPlaybackQuality("small");
	event.target.playVideo();
}

function onPlayerStateChange1(event) {
	if (event.data === 0) { }
}
