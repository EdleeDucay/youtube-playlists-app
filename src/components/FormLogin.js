import React, { useState, useRef } from 'react'
import '../styles/Form.css'
import { useAuth } from '../contexts/AuthContext';
import {Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

const FormLogin = () => {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to log in')
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
                    <div className="form-inputs">
                    {error && <Alert className="w-100 h-50" variant="danger">{error}</Alert>}

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
                    <div className="form-input-login">
                        <Link to="/forgot-password">Forgot Password?</Link>
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

export default FormLogin