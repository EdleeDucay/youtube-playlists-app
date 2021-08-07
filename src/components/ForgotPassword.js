import React, { useState, useRef } from 'react'
import '../styles/Form.css'
import { useAuth } from '../contexts/AuthContext';
import {Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ForgotPassword = () => {
    const usernameRef = useRef()
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setMessage('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("An email has been sent")
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return(

        <div className='container-wrapper'>
            <div className="loginTitle">
                <img src='img/Youtube.png' alt='YouTube-Logo' className='youtubeLogo'/>
                        Youtube Custom Playlists
                        </div>
            <div className='form-container'>
            <div className='container'>
            
            <div className="form-content">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Password Reset</h1>
                    <div className="form-inputs">
                    {error && <Alert className="w-100 h-50" variant="danger">{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                        <label htmlFor='email' className='form-label'>
                            Email
                        </label>
                        <input 
                            id='email'
                            type='text' 
                            name='email' 
                            className='form-input'
                            placeholder='Enter your email'
                            ref={emailRef}
                            required
                            />
                    </div>
                    
                    
                    <button disabled={loading} className="form-input-btn"
                    type='submit'>
                        Reset Password
                    </button>
                    <div className="form-input-login">
                        <Link to="/login">Login</Link>
                    </div>
                </form>
                <span className="form-input-login">
                        Need an account? Signup <Link to="/signup">here</Link>
                    </span>
            </div>
            
        </div>
            </div>
        </div>

       
    )
}

export default ForgotPassword