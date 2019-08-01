import React, { Component } from "react";
import VideosItem from './VideosItem';

export default class VideosList extends Component {
  render() {
    const {videos,onVideoSelect} = this.props;
    const renderedList = videos.map(video=>{
        return <VideosItem 
        key={video.id.videoId}
        onVideoSelect={onVideoSelect} video={video}/>;
    });
    return (
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    );
  }
}
