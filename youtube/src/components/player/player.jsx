import React, { Component } from "react";
import styles from "./player.module.css";

class Player extends Component {
  constructor(props) {
    super(props);
  }

  calculateUploadedDate = (uploadDate) => {
    const distance = new Date().getTime() - new Date(uploadDate).getTime();
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % 24);
    if (days !== 0) {
      return `Uploaded ${days}d ago`;
    } else {
      return `Uploaded ${hours}h ago`;
    }
  };

  render() {
    console.log(this.props);
    return (
      <section className={styles.container}>
        <iframe
          className={styles.player}
          id="player"
          type="text/html"
          width="100%"
          height="500px"
          src={`http://www.youtube.com/embed/${this.props.video.id}`}
          frameborder="0"
          allowFullScreen
        ></iframe>
        <div className={styles.desc}>
          <h1 className={styles.title}>{this.props.video.snippet.title}</h1>
          <h4 className={styles.channel}>
            {this.props.video.snippet.channelTitle}
          </h4>
          <span className={styles.date}>
            {this.calculateUploadedDate(this.props.video.snippet.publishedAt)}
          </span>
        </div>
      </section>
    );
  }
}

export default Player;
