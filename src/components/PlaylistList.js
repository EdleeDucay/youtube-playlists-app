import React , {useState} from 'react'
import '../styles/Playlist.css'
import PlaylistItem from './PlaylistItem'
import '../styles/VideoItem.css'

export default function PlaylistList({videos, handleVideoSelect}) {
    const renderedVideos = videos.map((video) => {
        const channel_title = video.videoDoc.get('channel-title')
        const channel_id = video.videoDoc.get('channelId')
        const thumbnail_url = video.videoDoc.get('thumbnail')
        const video_title = video.videoDoc.get('title')
        const video_id = video.videoDoc.get('videoId')

        return <PlaylistItem video={
            {channelTitle: channel_title,
            channelId: channel_id,
            thumbnail: thumbnail_url,
            title: video_title,
            videoId: video_id}} handleVideoSelect={handleVideoSelect}/>

    });

    return (
        <div className='mt-5'>
            <div className="playlist-item">


            <div className="videoList">
                {renderedVideos}
            </div>
        

            </div>
        </div>
        
    
    )
}

