import React, {useState, useRef, useEffect, componentDidMount} from 'react'
import {Button, Alert, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import "../styles/Home.css"
import {useAuth} from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'

export default function HomePage() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)
    const searchRef = useRef()

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
        // console.log("this is resp", response)
        // console.log("VIDEOS: ", videos)

    }

    function handleVideoSelect(video) {
        setSelectedVideo(video)
    }

    async function handleGoToHome(e){
        setSelectedVideo(null)
        searchRef.current.value = ""
        handleSubmit(e)
        
    }

    useEffect(() => {
        setSelectedVideo(null)
        searchRef.current.value = ""
        const fetchData = async () => {
            const response = await youtube.get('/search', {
                params: {
                    q: searchRef.current.value
                }
            })
        setVideos(response.data.items)
        console.log("RESPONSE: ",response)

        }
        fetchData()
    }, []);
    
    

    return (
        <>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Navbar expand="lg" bg="dark" variant="dark">

            <Navbar.Brand className="px-3" onClick={handleGoToHome}>
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
            <VideoPlayer selectedVideo={selectedVideo}/>
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
        </div>
        </>
       
    )
}
