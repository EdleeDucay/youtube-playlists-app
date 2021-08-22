import React from 'react'

export default function VideoItem(props) {
    return (
        <div onClick={() => props.handleVideoSelect(props.video)} >
            {/* {console.log('video: ', props)} */}
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description}/>
            <div>
                {props.video.snippet.title}
            </div>

        </div>
    )
}

