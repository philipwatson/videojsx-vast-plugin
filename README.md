# @muppy/videojsx-vast-plugin

![npm](https://img.shields.io/npm/v/@muppy/videojsx-vast-plugin)

A [Video.js (legacy)](https://legacy.videojs.org/) plugin for playing VAST and VPAID ads.

Initially based on [videojs-vast-plugin](https://github.com/theonion/videojs-vast-plugin), it has been substantially rewritten for Video.js 8 and kept up to date with its dependencies.

## Install

```bash
npm install @muppy/videojsx-vast-plugin video.js videojs-contrib-ads
```

`video.js` and `videojs-contrib-ads` are peer dependencies — they are required at runtime and are not bundled in the module builds.

## Usage

There are 3 ways to use this: import the module to create your own player or plugin, or simply use the plugin script or the all-in-one player script.  

### Module

To be used by your chosen bundler or build tool.

Like videojs-contrib-ads, importing the plugin as a side effect — it registers itself automatically on the `videojs` instance:

```js
import videojs from 'video.js';
import 'videojs-contrib-ads';
import '@muppy/videojsx-vast-plugin';

import 'video.js/dist/video-js.css';
import '@muppy/videojsx-vast-plugin/style.css';
 
// ... export something or get straight to it, you know the drill.
const player = videojs('vid1');
player.vast({ url: 'https://your-vast-url.com/vast.xml', skip: 8 });
```

CommonJS works the same way — the `require` call registers the plugin as a side effect:

```js
require('videojs-contrib-ads');
require('@muppy/videojsx-vast-plugin');
```

### Standalone Plugin Script

Host the files `./dist/videojsx.vast.css` and `./dist/videojsx.vast.js` somewhere. The CSS is optional - you may want to apply different styling. 

Remember to also add the dependencies on the page: Video.js and videojs-contrib-ads. Load ordering does matter. Be sure you request Video.js first and videojs-contrib-ads anywhere before `videojsx.vast.js`.

It will look something like this:

```html
<head>
    <!-- video.js framework -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/8.23.9/video-js.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/8.23.9/video.min.js"></script>

    <!-- Ads plugin for video.js -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/7.3.2/videojs.ads.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/7.3.2/videojs.ads.min.js"></script>

    <!-- This plugin for video.js -->
    <link href="http://where-you-host-the-plugin.com/videojsx.vast.css" rel="stylesheet">
    <script src="http://where-you-host-the-plugin.com/videojsx.vast.js"></script>
</head>
```

### All-In-One Player Script

A great way to get started quickly.

Take the `./dist/player.js` file and host it somewhere.

`player.js` bundles Video.js, videojs-contrib-ads, and all CSS into a single file — nothing else is needed:

```html
<head>
    <script src="https://where-you-host-the-plugin.com/player.js"></script>
</head>
```

## Usage

### General Use

Simple example:
```html
<video id="vid1" width="640" height="400" controls class="video-js vjs-default-skin" data-setup='{"autoplay":false}' poster="optional-poster.jpg">
  <source id ="mysrc" src="your-content.mp4" type="video/mp4">
  Your browser does not support video.
</video>
<div id="companion"></div>

<script>
  var player = videojs("vid1");

  var companion = {
    elementId: "companion",
    maxWidth: 300,
    maxHeight: 250
  };

  player.vast({url: "https://your-vast-url.com/vast.xml", skip: 8, companion: companion});
</script>
```

#### Gotcha

There are many ways to integrate the player onto the page. For example, dynamically adding the elements via JavaScript.

In all cases, be sure `player.vast({...})` is called immediately after Video.js in the same "tick". 

Otherwise, the videojs-contrib-ads, a dependency of this plugin, may error on every page load or occasionally — depends on your integration. If there was a problem, no ad will play, and you'll see this message in the console:

> videojs-contrib-ads has not seen a loadstart event 5 seconds after being initialized, but a source is present. This indicates that videojs-contrib-ads was initialized too late. It must be initialized immediately after video.js in the same tick. As a result, some ads will not play and some media events will be incorrect.

For more information, see https://videojs.github.io/videojs-contrib-ads/integrator/getting-started.html#important-note-about-initialization

If you want to initialize later, simply delay setting the video player's source. Once the source is set, then immediately call `player.vast({...})`. Calling `player.vast({...})` before setting the source also works.

### Options

| Name                        | Optional | Default | Description                                                                                                                                                                                                              |
|-----------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `url`                       | Yes      | n/a     | URL that responds with a VAST XML ad tag. Can be an array of URLs to be used as fallbacks (Ad Waterfall) - if the first URL fails to get ads, then the next URL will be tried, and so on until a VAST with ads is found. |
| `xml`                       | Yes      | n/a     | The VAST XML ad tag. Use as an alternative to `url`. Can be a String or XMLDocument.                                                                                                                                     |
| `seekEnabled`               | Yes      | `false` | Enable the player seek control when advert is playing. `controlsEnabled` must be enabled also.                                                                                                                           |
| `controlsEnabled`           | Yes      | `false` | Enable the player controls (pause, play, volume) when advert is playing                                                                                                                                                  |
| `wrapperLimit`              | Yes      | `10`    | Maximum number of VAST wrappers (aka VAST request redirects) allowed                                                                                                                                                     |
| `withCredentials`           | Yes      | `true`  | Enable third-party cookies on the VAST request                                                                                                                                                                           |
| `skip`                      | Yes      | `0`     | Number of seconds the user has to wait before the advert can be skipped                                                                                                                                                  |
| `honorSkipOffset`           | Yes      | `false` | Honor the VAST <Linear> creative's skipoffset attribute if it is present; in that case, the `skip` option will be ignored.                                                                                               | 
| `displayRemainingTime`      | Yes      | `false` | Display the remaining time until the ad ends                                                                                                                                                                             |
| `displayRemainingTimeIcons` | Yes      | `false` | Display play/pause and mute/unmute icons before the remaining time message                                                                                                                                               |
| `messages`                  | Yes      | `{}`    | See Messages options below                                                                                                                                                                                               |
| `companion`                 | Yes      | `{}`    | See Companion options below                                                                                                                                                                                              |
| `vpaid`                     | Yes      | `{}`    | See VPAID options below                                                                                                                                                                                                  |
| `schedule`                  | Yes      | n/a     | An array of schedule items. If provided, the `url` and `xml` properties of this object will be ignored                                                                                                                   |

#### Messages Options

| Name            | Optional | Default                         | Description                                                                                                                                                                                      |
|-----------------|----------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `skip`          | Yes      | `Skip`                          | Message displayed on the clickeable button to skip the ad                                                                                                                                        |
| `skipCountdown` | Yes      | `Skip in {seconds}...`          | Message displayed for the countdown to enable skip of the ad. `{seconds}` will be replaced with the number of seconds left to skip the ad                                                        |
| `remainingTime` | Yes      | `This ad will end in {seconds}` | Message displayed for the countdown to the end of the ad. `{seconds}` will be replaced with the number of seconds left to the end of the ad. Displayed only if `displayRemainingTime` is enabled |


#### Companion Options

| Name        | Optional | Default | Description                                                      |
|-------------|----------|---------|------------------------------------------------------------------|
| `elementId` | Yes      | `null`  | Id of the HTML element that will serve as the creative container |
| `maxWidth`  | Yes      | `0`     | The maximum width allowed for the creative                       |
| `maxHeight` | Yes      | `0`     | The maximum height allowed for the creative                      |


#### VPAID Options

| Name               | Optional | Default                 | Description                                                                                                    |
|--------------------|----------|-------------------------|----------------------------------------------------------------------------------------------------------------|
| `videoInstance`    | Yes      | `'same'`                | Determines which video element to pass to the VPAID ad. Either `'none'` or `'same'`.                           |
| `containerClass`   | Yes      | `'vjs-vpaid-container'` | The class name of the container that will house the VPAID iframe.                                              |
| `enableToggleMute` | Yes      | `false`                 | Show a transparent icon button on the video (bottom-right) that the user can use to mute and unmute the audio. |   


#### Schedule Item Options

| Name     | Optional | Default | Description                                         |
|----------|----------|---------|-----------------------------------------------------|
| `url`    | Yes      | n/a     | Same as the `url` option on the top level           |
| `xml`    | Yes      | n/a     | Same as the `xml` option on the top level           |
| `offset` | Yes      | `'pre'` | When to play the ad tag. See possible values below. |

Offset values:
* `pre`: (string) Play before the content (preroll).
* `post`: (string) Play after the content (postroll).
* number: (number or string) Play after the specified number of seconds. For example, `15`.
* xx%: (string) Play after xx% of the content. For example, `75%`
* time code: (string) Play at a specific time, in HH:MM:SS or HH:MM format. Examples: `1:30:12` (1 hour, 30 mins, 12 secs), `2:00` (2 hours), `0:25` (25 mins).


## Dev Workflow

### Setup

Clone the project from Github. The source and build scripts are not published to the npm repository. 

This project uses LFS for versioning large files (e.g., mp4). Only useful for development.
Please see [Git Large File Storage](https://git-lfs.github.com/) on Github for details.

Example setup for Mac OS:
```bash
brew install git-lfs
git lfs install
```

If you already cloned this repo before installing LFS and want to get the real content (replace pointer files):

```bash
git lfs checkout
git lfs fetch
```

### Build

NodeJs and its package manager (npm) is required to build.

Run `npm install` then `npm run build`.

The build creates the following files in the `dist/` folder:

| Artifact Name       | Files                                                    | Description                                                              |
|---------------------|----------------------------------------------------------|--------------------------------------------------------------------------|
| Plugin Script       | videojsx.vast.js, videojsx.vast.js.gz, videojsx.vast.css | Standalone plugin that can be integrated to an external video.js player. |
| Video Player Script | player.js, player.js.gz                                  | A file that has video.js, css and other dependencies bundled in.         |
| ES Module           | videojsx.vast.es.js, videojsx.vast.es.js.map             | For build tools that support ES6 Modules (ESM)                           |
| CommonJS Module     | videojsx.vast.cjs.js, videojsx.vast.cjs.js.map           | For build tools that support CommonJS Modules                            |


### Workflow

Run `npm start` brings up a development server at port 9999 with automatic background builds.

The page is http://localhost:9999/index.html

The command should automatically open this page.

The build will be triggered when any of the files under `src/` is modified. The currently opened page on port 9999 should reload automatically.

### Automated Tests

Is currently in an experimental state. 

## Credit

* This plugin is a modification of an existing plugin [videojs-vast-plugin](https://github.com/theonion/videojs-vast-plugin) by The Onion
* The [Video.js Framework](http://videojs.com/) itself
* Video.js's [Ad plugin](https://github.com/videojs/videojs-contrib-ads) allowing video ad integration (switching between content and pre-roll)
* Dailymotion's [VAST client](https://github.com/dailymotion/vast-client-js) to parse and read VAST content
* MailOnline's [VPAIDHTMLClient](https://github.com/MailOnline/VPAIDHTML5Client). A JavaScript iframe wrapper for VPAID
