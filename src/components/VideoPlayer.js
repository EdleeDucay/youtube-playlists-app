import React from 'react'
import "../styles/Home.css"


export default function VideoPlayer({selectedVideo}) {
    if (!selectedVideo) {
        return <div className="homeIntro">
            helo
        </div>
    }
    console.log("VIDEO: ", selectedVideo)

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <div>

            <div className="videoPlayer embed-responsive embed-responsive-16by9">
                <iframe src={videoSrc} 
                    allowFullScreen 
                    title="Video player"
                    className="embed-responsive-item"/>
                <h4>{selectedVideo.snippet.title}</h4>                
            </div>
            <hr/>

        </div>

    )
}
