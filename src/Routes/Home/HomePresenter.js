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
      html5: {
        hls: {
          withCredentials: false
        }
      },
      techOrder: ["flash"],
      flash: {
        swf:
          "https://unpkg.com/@brightcove/videojs-flashls-source-handler/dist/video-js.swf",
        hls: {
          withCredentials: false
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
