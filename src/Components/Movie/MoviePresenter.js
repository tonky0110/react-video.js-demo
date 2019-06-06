import React from "react";
import videojs from "video.js";
// import HLSSource from "../HLSSource";
import "./video-js.css";
import "videojs-flash";
import "@brightcove/videojs-flashls-source-handler";

// window.HELP_IMPROVE_VIDEOJS = false; //7 버전에서는 제외.
window.videojs = videojs;
require("videojs-contrib-hls/dist/videojs-contrib-hls.js");

class MoviePresenter extends React.Component {
  constructor(props) {
    super(props);
    console.log("videoJsOptions: ", props);
  }
  componentDidMount = () => {
    const videojs = window.videojs;
    // videojs.Hls.GOAL_BUFFER_LENGTH = 10;
    // videojs.Hls.MAX_GOAL_BUFFER_LENGTH = 10;
    // GOAL_BUFFER_LENGTH_RATE: 1,
    // A fudge factor to apply to advertised playlist bitrates to account for
    // temporary flucations in client bandwidth
    // BANDWIDTH_VARIANCE: 1.2,
    // How much of the buffer must be filled before we consider upswitching
    // BUFFER_LOW_WATER_LINE: 0,
    // MAX_BUFFER_LOW_WATER_LINE: 30,
    // BUFFER_LOW_WATER_LINE_RATE: 1
    const {
      aspectRatio,
      autoplay,
      controls,
      muted,
      width,
      height,
      html5,
      techOrder,
      flash,
      sources
    } = this.props;
    this.player = videojs(
      this.videoNode,
      {
        aspectRatio,
        autoplay,
        controls,
        muted,
        width,
        height,
        html5,
        techOrder,
        flash,
        sources
      },
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
    const myPlayer = this.player;
    myPlayer.ready(function() {
      const techName = myPlayer.techName_;
      if (techName === "Flash") {
        console.log(`techName_: `, techName);
        console.log("myPlayer.flash: ", myPlayer.options_.flash);
      } else if (techName === "Html5") {
        const { hls } = html5;
        const externHls = myPlayer.tech_.hls.options_.externHls;
        for (const props in hls) {
          if (externHls[props]) {
            externHls[props] = hls[props];
            console.log(`externHls[${props}]: ${externHls[props]}`);
          }
        }
      }
    });

    this.player.on(
      [
        // "loadstart",
        // "play",
        // "playing",
        // "firstplay",
        // "pause",
        // "ended",
        // "adplay",
        // "adplaying",
        // "adfirstplay",
        // "adpause",
        // "adended",
        // "contentplay",
        // "contentplaying",
        // "contentfirstplay",
        // "contentpause",
        // "contentended",
        // "contentupdate",
        // "loadeddata",
        // "loadedmetadata",
        "error"
      ],
      function(e) {
        console.warn("VIDEOJS player event: ", e.target);
      }
    );
    // console.log("window.videojs: ", window.videojs);
    // console.log("this.player: ", this.player);
  };
  componentWillUnmount = () => {
    if (this.player) {
      this.player.dispose();
    }
  };
  render = () => {
    return (
      <div>
        <div data-vjs-player>
          <video ref={node => (this.videoNode = node)} className="video-js">
            can not play this movie.
          </video>
        </div>
      </div>
    );
  };
}

export default MoviePresenter;
