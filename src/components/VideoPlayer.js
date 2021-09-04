import React from 'react'
import "../styles/Home.css"


export default function VideoPlayer({selectedVideo}) {
    if (!selectedVideo) {
        return <div className="homeIntro">
            
        </div>
    }
    console.log("VIDEO: ", selectedVideo)

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    const channelSrc = `https://www.youtube.com/channel/${selectedVideo.snippet.channelId}`;

    return (
        <div>

            <div className="videoPlayer embed-responsive embed-responsive-16by9">
                <iframe src={videoSrc} 
                    allowFullScreen 
                    title="Video player"
                    className="embed-responsive-item"/>
                <h4>{selectedVideo.snippet.title}</h4>            
                <a className="videoPlayer-channelTitle" href={channelSrc}>{selectedVideo.snippet.channelTitle}</a>    
            </div>
            <hr/>

        </div>

    )
}
