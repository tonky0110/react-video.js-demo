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
    const {
      aspectRatio,
      autoplay,
      controls,
      muted,
      width,
      height,
      techOrder,
      flash,
      sources
    } = props;
    console.log(
      "videoJsOptions: ",
      aspectRatio,
      autoplay,
      controls,
      muted,
      width,
      height,
      techOrder,
      flash,
      sources
    );
  }
  componentDidMount = () => {
    const videojs = window.videojs;

    videojs.Hls.BANDWIDTH_VARIANCE = 1.2;
    videojs.Hls.BUFFER_LOW_WATER_LINE = 0;
    videojs.Hls.BUFFER_LOW_WATER_LINE_RATE = 1;
    videojs.Hls.GOAL_BUFFER_LENGTH = 10;
    videojs.Hls.GOAL_BUFFER_LENGTH_RATE = 1;
    videojs.Hls.MAX_BUFFER_LOW_WATER_LINE = 30;
    videojs.Hls.MAX_GOAL_BUFFER_LENGTH = 10;

    this.player = videojs(
      this.videoNode,
      {
        ...this.props,
        debug: true //...this.props,
      },
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
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
