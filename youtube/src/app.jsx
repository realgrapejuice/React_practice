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
    this.props.youtube
      .mostPopular() //
      .then((video) => this.setState({ videos: video }));
  };

  getUserInput = (query) => {
    this.props.youtube
      .search(query) //
      .then((video) => this.setState({ videos: video }));
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
