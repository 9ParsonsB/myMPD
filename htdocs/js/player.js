var mpdstream = decodeURI(location.hash).replace(/^#/,'');
player.src = mpdstream;
console.log('playing mpd stream: ' + player.src);
player.load();
player.play();