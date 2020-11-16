import React, { Component } from "react";
import Player from "./components/player/player";
import Search from "./components/search/search";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBZ0up_K2359_l5m3V6AbQ4pK7QR8V5m1M",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => this.setState({ videos: result.items }))
      .catch((error) => console.log("error", error));
  };

  getUserInput = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyBZ0up_K2359_l5m3V6AbQ4pK7QR8V5m1M`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => this.setState({ videos: result.items }))
      .catch((error) => console.log("error", error));
  };

  selectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className={styles.container}>
        <Search onSearch={this.getUserInput} />
        <section className={styles.content}>
          {this.state.selectedVideo && (
            <div className={styles.player}>
              <Player video={this.state.selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              videos={this.state.videos}
              onVideoClick={this.selectVideo}
              display={this.state.selectedVideo ? "list" : "grid"}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
