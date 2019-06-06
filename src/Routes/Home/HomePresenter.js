import React from "react";
import Movie from "../../Components/Movie";
import "videojs-flash";
// import "@brightcove/videojs-flashls-source-handler";

class HomePresenter extends React.Component {
  render() {
    const videoJsOptions = {
      aspectRatio: "16:9",
      autoplay: false,
      controls: true,
      muted: true,
      width: "640",
      height: "360",
      techOrder: ["flash"],
      hls: {
        hls_debug: true,
        hls_lowbufferlength: 2,
        hls_minbufferlength: 2,
        hls_maxbufferlength: 2,
        debug: true,
        lowbufferlength: 2,
        minbufferlength: 2,
        maxbufferlength: 2
      },
      html5: {
        hls: {
          withCredentials: false
        }
      },
      flash: {
        // swf: require("videojs-swf/dist/video-js.swf"), // 안됨
        // swf: require("@brightcove/videojs-flashls-source-handler/dist/video-js.swf"), // 됨
        // swf: require("@brightcove/videojs-flashls-source-handler/dist/video-js.swf"), // 됨
        swf:
          "https://unpkg.com/@brightcove/videojs-flashls-source-handler/dist/video-js.swf", // 됨
        flashVars: {
          withCredentials: false,
          hls_debug: true,
          hls_lowbufferlength: 2,
          hls_minbufferlength: 2,
          hls_maxbufferlength: 2,
          debug: true,
          lowbufferlength: 2,
          minbufferlength: 2,
          maxbufferlength: 2
        },
        flashls: {
          withCredentials: false,
          hls_debug: true,
          hls_lowbufferlength: 2,
          hls_minbufferlength: 2,
          hls_maxbufferlength: 2,
          debug: true,
          lowbufferlength: 2,
          minbufferlength: 2,
          maxbufferlength: 2
        },
        hls_debug: true,
        hls_lowbufferlength: 2,
        hls_minbufferlength: 2,
        hls_maxbufferlength: 2,
        debug: true,
        lowbufferlength: 2,
        minbufferlength: 2,
        maxbufferlength: 2
      },
      sources: [
        {
          src:
            "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
          type: "application/x-mpegURL"
        }
      ]
      /*
      controlBar: {
        audioTrackButton: () => {},
        chaptersButton: () => {},
        currentTimeDisplay: () => {},
        customConrolSpacer: () => {},
        descriptionButton: () => {},
        durationDisplay: () => {},
        fullscreenToggle: () => {},
        liveDispaly: () => {},
        playToggle: () => {},
        playbackRateMenuButton: () => {},
        progressControl: () => {},
        remainingTimeDisplay: () => {},
        subsCapsButton: () => {},
        timeDiveder: () => {},
        volumnPanel: () => {}
      }
        */
    };
    return <Movie {...videoJsOptions} />;
  }
}

export default HomePresenter;
