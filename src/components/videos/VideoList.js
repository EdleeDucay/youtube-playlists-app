import React from 'react'
import VideoItem from './VideoItem'
import '../../styles/VideoItem.css'

export default function VideoList({videos, handleVideoSelect}) {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>

    });
    return (
        <div className="videoList">
            {renderedVideos}
        </div>
    )
}
