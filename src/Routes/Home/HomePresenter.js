import React from "react";
import Movie from "../../Components/Movie";
import "videojs-flash";
import "@brightcove/videojs-flashls-source-handler";

class HomePresenter extends React.Component {
  render() {
    const videoJsOptions = {
      aspectRatio: "16:9",
      autoplay: false,
      controls: true,
      muted: true,
      width: "640",
      height: "360",
      techOrder: ["flash", "html5"],
      flash: {
        swf: require("@brightcove/videojs-flashls-source-handler/dist/video-js.swf")
      },
      sources: [
        {
          src: "https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8",
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
