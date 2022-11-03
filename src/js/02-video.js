import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});
const onPlay = function () {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
    // data is an object containing properties specific to that event
};

player.on('timeupdate', onPlay);

    