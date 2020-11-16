import React, { Component } from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.list_container}>
        {this.props.videos.map((video) => (
          <VideoItem
            key={video.etag}
            video={video}
            onVideoClick={this.props.onVideoClick}
            display={this.props.display}
          />
        ))}
      </ul>
    );
  }
}

export default VideoList;
