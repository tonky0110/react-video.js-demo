import React from "react";
import videojs from "video.js";
import HLSSource from "../HLSSource";
import "./video-js.css";
import "videojs-flash";
import "@brightcove/videojs-flashls-source-handler";

window.videojs = videojs;
require("videojs-contrib-hls/dist/videojs-contrib-hls.js");

class MoviePresenter extends React.Component {
  constructor(props) {
    super(props);
    console.log("videoJsOptions: ", props);
  }
  componentDidMount = () => {
    const videojs = window.videojs;

    videojs.Hls.GOAL_BUFFER_LENGTH = 10;
    videojs.Hls.MAX_GOAL_BUFFER_LENGTH = 10;
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
    const player = this.player;
    player.on("ready", function() {
      // console.log("player: ", player);
    });

    this.player.on(
      [
        "loadstart",
        "play",
        "playing",
        "firstplay",
        "pause",
        "ended",
        "adplay",
        "adplaying",
        "adfirstplay",
        "adpause",
        "adended",
        "contentplay",
        "contentplaying",
        "contentfirstplay",
        "contentpause",
        "contentended",
        "contentupdate",
        "loadeddata",
        "loadedmetadata",
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
