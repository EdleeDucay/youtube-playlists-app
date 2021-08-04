import React, { useState, useRef } from 'react'
import '../Form.css'
import { useAuth } from '../contexts/AuthContext';
import {Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const FormLogin = () => {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const {signup, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
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
                    <h1>Login to your account</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    
                    <div className="form-inputs">
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
                    <div className="form-inputs">
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input 
                            id='password'
                            type='password' 
                            name='password' 
                            className='form-input'
                            placeholder='Enter your password'
                            ref={passwordRef}
                            required
                            />
                    </div>
                    
                    <button disabled={loading} className="form-input-btn"
                    type='submit'>
                        Login
                    </button>
                    <span className="form-input-login">
                        Need an account? Signup <Link to="/signup">here</Link>
                    </span>
                </form>
            </div>
        </div>
            </div>
        </div>

       
    )
}

export default FormLogin