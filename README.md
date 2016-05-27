videojsx-vast-plugin
====================

Taken the code from [videojs-vast-plugin](https://github.com/theonion/videojs-vast-plugin) and made it work with videojs 5.

This project intends to keep up to date with the videojs and its other dependencies.

The player behaves exactly the same as the original except it allows third-party cookies, which can be useful to some advertisers.

### Usage

#### Get it working on your website

Include this plugin (**videojs5.vast.css** and **videojs5.vast.js**) and its dependencies.

It'll look something like this:

```
    <!-- video.js framework -->
    <link href="video-js.css" rel="stylesheet">
    <script src="video.js"></script>

    <!-- Ads plugin for video.js -->
    <link href="videojs.ads.css" rel="stylesheet">
    <script src="videojs.ads.js"></script>

    <!-- VAST 3.0 client library -->
    <script src="vast-client.js"></script>

    <!-- This plugin for video.js -->
    <link href="videojs5.vast.css" rel="stylesheet">
    <script src="videojs5.vast.js"></script>
```


What versions do I use? Check out the bower.json file to find out which versions are guaranteed to work together. You can download and host yourself or use a CDN like [CDNJS](https://cdnjs.com/) to get the external links. 

The plugin registers itself with videojs. All you have to do is initialize it (as well as the Ads plugin). See [Videojs plugins guide](https://github.com/videojs/video.js/blob/master/docs/guides/plugins.md) for more info.

 
```
<video id="vid1" width="640" height="400" controls class="video-js vjs-default-skin" data-setup='{"autoplay":true}'>
    <source src="clips/content.mp4" type="video/mp4">
    Your browser does not support video.
</video>

<script type="text/javascript">
    var vid1 = videojs("vid1");
    vid1.ads();
    vid1.vast({
        url: vastUrl
        /*, skip: -1 // How long in seconds the user has to wait until the ad can be skipped. 5 sec default. A negative number disables skipping. */
    });
</script>

```


#### Files used for development

* [**Bower**](http://bower.io/) is used to download the dependencies. This makes it easier to try later versions and see what happens to the plugin.
* The **init.sh** is used to conveniently download sample video files (via wget) and source code dependencies (via bower). The script is easy enough to work out what you need to download and setup if you're unable to execute it.
* The nodejs program, **example-server.js**, launches a simple server to host the **example.html** file and another server to host VAST xmls and receive impressions, etc.


### Credit

* This plugin is a modification of an existing plugin [videojs-vast-plugin](https://github.com/theonion/videojs-vast-plugin) by The Onion
* The [Video.js Framework](http://videojs.com/) itself
* Video.js's [Ad plugin](https://github.com/videojs/videojs-contrib-ads) allowing video ad integration (switching between content and and pre-roll)
* Dailymotion's [VAST client](https://github.com/dailymotion/vast-client-js) to parse and read VAST content