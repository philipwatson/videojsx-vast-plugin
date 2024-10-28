# videojsx-vast-plugin


Initially, the code was taken from [videojs-vast-plugin](https://github.com/theonion/videojs-vast-plugin) and made it work with videojs 8.
It is very different now.

This project intends to keep up to date with the videojs and its other dependencies.


## Build

NodeJs and its package manager (npm) is required to build.

Run `npm install` then `npm run-script build`.

The build creates two independent artifacts in the `dist/` folder:

| Artifact Name | Files                               | Description                                                              |
|---------------|-------------------------------------|--------------------------------------------------------------------------|
| Plugin        | videojsx.vast.js, videojsx.vast.css | Standalone plugin that can be integrated to an external video.js player. |
| Video Player  | player.js                           | A file that has video.js, css and other dependencies bundled in.         |

Also, every JavaScript `.js` file has a compressed version `.js.gz`

## Usage

### Setting Up Plugin Scripts

Include this plugin (**videojsx.vast.css** and **videojsx.vast.js**) and its dependencies.

Ordering does matter. Be sure you request `video.js` first and `videojs-contrib-ads` anywhere before `videojsx.vast.js`.

It will look something like this:

```html
<head>
    <!-- video.js framework -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/8.6.1/video-js.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/8.6.1/video.min.js"></script>

    <!-- Ads plugin for video.js -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/7.3.2/videojs.ads.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/7.3.2/videojs.ads.min.js"></script>

    <!-- This plugin for video.js -->
    <link href="http://where-you-host-the-plugin.com/videojsx.vast.css" rel="stylesheet">
    <script src="http://where-you-host-the-plugin.com/videojsx.vast.js"></script>
</head>
```

### Setting Up Video Player Script

Put anywhere before you start using it. For example, in the head section:

```html
<head>
    <script src="http://where-you-host-the-plugin.com/player.js"></script>
</head>
```


### General Use

Example:
```html
<video id="vid1" width="640" height="400" controls class="video-js vjs-default-skin" data-setup='{"autoplay":false}' poster="your-poster.jpg">
  <source id ="mysrc" src="your-content.mp4" type="video/mp4">
  Your browser does not support video.
</video>
<div id="companion"></div>

<script>
  var player = videojs('vid1');

  var companion = {
    elementId: "companion",
    maxWidth: 300,
    maxHeight: 250
  };

  player.vast({url: 'http://your-vast-url.com/vast.xml', skip: 8, companion: companion});
</script>
```

#### Options

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

##### Messages Options

| Name            | Optional | Default                         | Description                                                                                                                                                                                      |
|-----------------|----------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `skip`          | Yes      | `Skip`                          | Message displayed on the clickeable button to skip the ad                                                                                                                                        |
| `skipCountdown` | Yes      | `Skip in {seconds}...`          | Message displayed for the countdown to enable skip of the ad. `{seconds}` will be replaced with the number of seconds left to skip the ad                                                        |
| `remainingTime` | Yes      | `This ad will end in {seconds}` | Message displayed for the countdown to the end of the ad. `{seconds}` will be replaced with the number of seconds left to the end of the ad. Displayed only if `displayRemainingTime` is enabled |


##### Companion Options

| Name        | Optional | Default | Description                                                      |
|-------------|----------|---------|------------------------------------------------------------------|
| `elementId` | Yes      | `null`  | Id of the HTML element that will serve as the creative container |
| `maxWidth`  | Yes      | `0`     | The maximum width allowed for the creative                       |
| `maxHeight` | Yes      | `0`     | The maximum height allowed for the creative                      |


##### VPAID Options

| Name               | Optional | Default                 | Description                                                                                         |
|--------------------|----------|-------------------------|-----------------------------------------------------------------------------------------------------|
| `videoInstance`    | Yes      | `'none'`                | Determines which video element to pass to the VPAID ad. Any one of: `'none'`, `'new'` and `'same'`. |
| `containerId`      | Yes      | `undefined`             | The id of the container. Usage is not recommended.                                                  |
| `containerllClass` | Yes      | `'vjs-vpaid-container'` | The class name of the container. Usage is not recommended.                                          |

##### Schedule Item Options

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
This project uses LFS for versioning large files (e.g., mp4). Only useful for development.
Please see [Git Large File Storage](https://git-lfs.github.com/) on github for details.

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

### Workflow
Run `npm start` brings up a development server at port 9999 with automatic background builds.

The page is http://localhost:9999/index.html

The command should automatically open this page.

The build will be triggered when any of the files under `src/` is modified. The currently opened page on port 9999
should reload automatically.


## Testing

Experimental

## Credit

* This plugin is a modification of an existing plugin [videojs-vast-plugin](https://github.com/theonion/videojs-vast-plugin) by The Onion
* The [Video.js Framework](http://videojs.com/) itself
* Video.js's [Ad plugin](https://github.com/videojs/videojs-contrib-ads) allowing video ad integration (switching between content and pre-roll)
* Dailymotion's [VAST client](https://github.com/dailymotion/vast-client-js) to parse and read VAST content
* MailOnline's [VPAIDHTMLClient](https://github.com/MailOnline/VPAIDHTML5Client). A JavaScript iframe wrapper for VPAID
