import '!style-loader!css-loader!video.js/dist/video-js.css';

import VastPlugin from 'vast-plugin';
import videojs from 'video.js';

videojs.registerPlugin('vast', VastPlugin);

const player = videojs('vid1');

// player.ads({debug:true});

player.vast({url:"vast_examples/vast1.xml", skip: 8});
