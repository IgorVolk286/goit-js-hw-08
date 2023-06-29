import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));
  console.log(data.seconds);
}
const time = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY));
console.log(time);

player
  .setCurrentTime(time)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
