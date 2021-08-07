import React, {useState} from 'react'
import {Button, Alert} from 'react-bootstrap'
import "../styles/Form.css"
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
        <div>
        HELLO
        {error && <Alert variant='danger'>{error}</Alert>}
        <button onClick={handleLogout}>Logout</button>
        </div>
        </>
       
    )
}
