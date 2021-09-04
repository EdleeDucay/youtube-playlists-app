import React from 'react'
import '../styles/VideoItem.css'

export default function VideoItem(props) {
    return (
        <div className="videoItem">
            {/* {console.log('video: ', props)} */}
            <img className="thumbnail"
            src={props.video.snippet.thumbnails.medium.url} 
            alt={props.video.snippet.description} 
            onClick={() => props.handleVideoSelect(props.video)}/>
            <div className="videoItem-title">
                {props.video.snippet.title}
            </div>
            <div className="videoItem-channel">
                Channel: {props.video.snippet.channelTitle}
            </div>
        </div>
    )
}

