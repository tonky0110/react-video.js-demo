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
      html5: {
        hls: {
          withCredentials: false
        }
      },
      flash: {
        // swf: require("@brightcove/videojs-flashls-source-handler/dist/video-js.swf"), // 됨
        swf:
          "https://unpkg.com/@brightcove/videojs-flashls-source-handler/dist/video-js.swf", // 됨
        flashVars: {
          withCredentials: false,
          hls_debug2: true,
          hls_lowbufferlength: 10,
          hls_minbufferlength: 10,
          hls_maxbufferlength: 10
        }
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
