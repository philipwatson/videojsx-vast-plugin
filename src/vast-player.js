import '!style-loader!css-loader!video.js/dist/video-js.css';
import '!style-loader!css-loader!vast-player.css';

import videojs from 'video.js';
import 'videojs-contrib-ads'; // Contrib Ads plugin registers itself
import  'vast-plugin';


window.videojs = videojs;
