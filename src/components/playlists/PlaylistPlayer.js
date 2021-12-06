import React, {useState} from 'react'
import "../styles/Home.css"
import {Button, Alert, Navbar, Nav, Form, FormControl, Modal} from 'react-bootstrap'
import ModalAddVideo from '../modals/ModalAddVideo'
import {db} from '../../apis/firebase'


export default function VideoPlayer({selectedVideo, playlists, currentUser}) {
    const [modalShow, setModalShow] = useState(false);

    if (!selectedVideo) {
        return <div className="homeIntro">
            
        </div>
    }

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    const channelSrc = `https://www.youtube.com/channel/${selectedVideo.snippet.channelId}`;

    function addVideoToDatabase(playlist) {
        console.log('video: ', selectedVideo)
        if (playlist !== "") {
            db.collection('Users').doc(currentUser).collection('Playlists').doc(playlist).collection('Videos').doc(selectedVideo.id.videoId).set({
                'title': selectedVideo.snippet.title,
                'channel-title': selectedVideo.snippet.channelTitle,
                'videoId': selectedVideo.id.videoId,
                'channelId': selectedVideo.snippet.channelId,
                'thumbnail': selectedVideo.snippet.thumbnails.medium.url
            })
        }
        
    }

    return (
        <div>

            <div className="videoPlayer embed-responsive embed-responsive-16by9">
                <iframe src={videoSrc} 
                    allowFullScreen 
                    title="Video player"
                    className="embed-responsive-item"/>

                <h4>{selectedVideo.snippet.title}</h4>         
                <a className="videoPlayer-channelTitle" href={channelSrc}>{selectedVideo.snippet.channelTitle}</a>    

                <Button variant="secondary" className="videoPlayer-add" onClick={() => setModalShow(true)}>
                Add to Playlist
                </Button>
                {console.log(playlists)}
                <ModalAddVideo
                playlists={playlists}
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSubmit={addVideoToDatabase}
                />
            </div>
            <hr/>

        </div>

    )
}
