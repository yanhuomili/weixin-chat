<template>
  <div>
    <h2>hls 插件演示</h2>
    <!-- <video
      id="video"
      src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      width="400"
      height="250"
      controls
    ></video> -->
    <video id="video" controls width="400" height="250"></video>
  </div>
</template>

<script>
export default {
  name: 'hls',
  mounted () {
    this.initHls()
  },
  methods: {
    initHls () {
      var video = document.getElementById('video');
      var videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
      // var videoSrc = 'http://live.streamingfast.net/osmflivech4.m3u8';
      // var videoSrc = 'http://live.streamingfast.hls-live/goodtv/_definst_/liveevent/live-ch5-2.m3u8';
      if (Hls.isSupported()) {
        console.log(11111)
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          console.log(222222)
          console.log(video, 'video')
          // video.play();
        });
      }
      // hls.js is not supported on platforms that do not have Media Source
      // Extensions (MSE) enabled.
      // 
      // When the browser has built-in HLS support (check using `canPlayType`),
      // we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video
      // element through the `src` property. This is using the built-in support
      // of the plain video element, without using hls.js.
      // 
      // Note: it would be more normal to wait on the 'canplay' event below however
      // on Safari (where you are most likely to find built-in HLS support) the
      // video.src URL must be on the user-driven white-list before a 'canplay'
      // event will be emitted; the last video event that can be reliably
      // listened-for when the URL is not on the white-list is 'loadedmetadata'.
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function () {
          video.play();
        });
      }
    }
  }

}
</script>

<style  scoped>
</style>