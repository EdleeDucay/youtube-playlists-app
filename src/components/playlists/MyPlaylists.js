import React, {useState, useRef, useEffect, componentDidMount} from 'react'
import {Button, Alert, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import "../../styles/Home.css"
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import youtube from '../../apis/youtube'
import VideoList from '../videos/VideoList'
import VideoPlayer from '../videos/VideoPlayer'
import ModalAddPlaylist from '../modals/ModalAddPlaylist' 
import {db} from '../../apis/firebase'
import PlaylistItem from './PlaylistItem'

export default function MyPlaylists() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)
    const searchRef = useRef()
    const [modalShow, setModalShow] = useState(false);
    const [playlistTitle, setPlaylistTitle] = useState('')
    const [playlists, setPlaylists] = useState([])

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await youtube.get('/search', {
            params: {
                q: searchRef.current.value
            }
        })
        setVideos(response.data.items)

    }

    function handleVideoSelect(video) {
        setSelectedVideo(video)
    }

    function onCreatePlaylistSubmit(e) {
        e.preventDefault();
        
        db.collection("Users").doc(currentUser.email).collection("Playlists").doc(playlistTitle).set({
            'title': playlistTitle
        })
        setModalShow(false);
    }

    useEffect(() => {
        // Grab current users playlists
        const fetchPlaylists = async () => {
            const snapshot = await db.collection('Users').doc(currentUser.email).collection("Playlists").get()
            console.log("SNAPSHOT: ", snapshot.docs)
            setPlaylists(snapshot.docs)
        }
        fetchPlaylists()

    }, []);

    // Bind each playlist to a component
    const renderedPlaylists = playlists.map((playlist) => {
        return <PlaylistItem />
    })
 
    return (
        <>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Navbar expand="lg" bg="dark" variant="dark">

            <Navbar.Brand className="px-3">
                <Link to="/" className="homeBrand">
                <img src='img/Youtube.png' alt='YouTube-Logo' className='youtubeLogoHome'/>
                        Youtube Custom Playlists
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link to="/" className="homeLink px-3">My Playlists</Nav.Link>
                <Form className="d-flex px-5" onSubmit={handleSubmit}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-3"
                        aria-label="Search"
                        ref= {searchRef}
                        style={{minWidth: '500px', 
                            backgroundColor: 'rgb(50, 50, 50)',
                            color: 'white',
                            borderColor: 'rgb(50, 50, 50)'}}
                    />
                    <Button variant="secondary" onClick={handleSubmit}>Search</Button>
                </Form>
            </Nav>
            
            <Nav >
                <Nav.Link className="px-3 homeEmail" disabled>{currentUser.email}</Nav.Link>
                <Button variant="secondary" className="mx-3" onClick={handleLogout}>Logout</Button>

            </Nav>
            </Navbar.Collapse>
        
        </Navbar>

       
       
        <div className="homeBody">

            <div className="text-center">
                <Button variant="secondary" className="myplaylist-create-btn w-25 mt-3" onClick={() => setModalShow(true)}>
                        Create a Custom Playlist
                        </Button>
                
                        <ModalAddPlaylist
                        show={modalShow}
                        setPlaylistTitle={setPlaylistTitle}
                        onSubmit={onCreatePlaylistSubmit}
                        onHide={() => setModalShow(false)}/>
            </div>
        
            <div className="playlists">
                {renderedPlaylists}
            </div>


            <VideoPlayer selectedVideo={selectedVideo}/>
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
        </div>
        
        </>
       
    )
}
