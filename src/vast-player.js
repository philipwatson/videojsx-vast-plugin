import '!style-loader!css-loader!video.js/dist/video-js.css';
import '!style-loader!css-loader!vast-player.css';

import VastPlugin from 'vast-plugin';
import videojs from 'video.js';

videojs.registerPlugin('vast', VastPlugin);

window.videojs = videojs;
