import React, {useState} from 'react'
import {Button, Alert, Navbar, Container, Nav, Form, FormControl} from 'react-bootstrap'
import "../styles/Home.css"
import {useAuth} from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function HomePage() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Navbar expand="lg" bg="dark" variant="dark">

            {/* <Container> */}
            <Navbar.Brand className="px-3">
                <Link to="/" className="homeBrand">
                <img src='img/Youtube.png' alt='YouTube-Logo' className='youtubeLogoHome'/>
                        Youtube Custom Playlists
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className=""> <Link to="/" className="homeLink px-3">My Playlists</Link></Nav.Link>
                <Form className="d-flex px-5">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-3"
                        aria-label="Search"
                        style={{minWidth: '500px', 
                            backgroundColor: 'rgb(50, 50, 50)',
                            color: 'white',
                            borderColor: 'rgb(50, 50, 50)'}}
                    />
                    <Button variant="secondary">Search</Button>
                </Form>
            </Nav>
            
            <Nav >
                <Nav.Link className="px-3 homeEmail" disabled>{currentUser.email}</Nav.Link>
                <Button variant="secondary" className="mx-3" onClick={handleLogout}>Logout</Button>

            </Nav>
            </Navbar.Collapse>
            {/* </Container> */}

        
        </Navbar>
        <div className="homeBody">
            HELLO
        </div>
        </>
       
    )
}
