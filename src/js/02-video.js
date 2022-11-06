import Player from '@vimeo/player'; 


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');



if (localStorage.getItem("videoplayer-current-time")) {
    const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
  

    player.setCurrentTime(currentTime)
        .then((currentTime) => console.log('Current time: ', currentTime))
        .catch((error) => console.log(error));
};


const onPlay = (data) => {
    const { seconds } = data;
      
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

