import React from 'react'
import '../../styles/PlaylistItem.css'

export default function PlaylistItem(props) {
    return (
        <div className='mt-5'>
            <div className="playlist-item">
                HI
                {console.log('video: ', props.playlist.collection('Videos').get().data())}
                {/* <img className="thumbnail"
                src={props.video.snippet.thumbnails.medium.url} 
                alt={props.video.snippet.description} 
                onClick={() => props.handleVideoSelect(props.video)}/>
                <div className="videoItem-title">
                    {props.video.snippet.title}
                </div>
                <div className="videoItem-channel">
                    Channel: {props.video.snippet.channelTitle}
                </div> */}
            </div>
        </div>
        
    )
}

