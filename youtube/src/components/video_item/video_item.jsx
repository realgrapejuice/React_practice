import React, { Component } from "react";
import styles from "./video_item.module.css";

class VideoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const displayType =
      this.props.display === "list" ? styles.list : styles.grid;
    return (
      <li className={`${styles.listItem} ${displayType}`}>
        <a
          className={displayType}
          href="#"
          onClick={() => {
            this.props.onVideoClick(this.props.video);
          }}
        >
          <img
            src={this.props.video.snippet.thumbnails.medium.url}
            alt="thumbnail"
          />
          <p className={styles.title}>{this.props.video.snippet.title}</p>
          <p className={styles.channel}>
            {this.props.video.snippet.channelTitle}
          </p>
        </a>
      </li>
    );
  }
}

export default VideoItem;
