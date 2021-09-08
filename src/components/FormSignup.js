import React, { useState, useRef } from 'react'
import {db} from '../apis/firebase'
import '../styles/Form.css'
import { useAuth } from '../contexts/AuthContext';
import {Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

const FormSignup = () => {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        if (passwordRef.current.value.length < 6) {
            return setError('Password must be longer than 6 characters')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            try {
                db.collection('Users').doc(emailRef.current.value).set({
                    email: emailRef.current.value,
                    username: usernameRef.current.value
                })
            } catch {
                setError('Failed to add to the database')
            }
            
            history.push("/")
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
                    <h1>Sign up for an account</h1>
                    <div className="form-inputs">
                     {error && <Alert className="w-100 h-50" variant="danger">{error}</Alert>}
                        <label htmlFor='username' className='form-label'>  
                        Username             
                        </label>
                        <input
                            id='username' 
                            type='text' 
                            name='username' 
                            className='form-input'
                            placeholder='Enter your username'
                            ref={usernameRef}
                            required
                            />
                    </div>
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
                    <div className="form-inputs">
                        <label htmlFor='password2' className='form-label'>
                            Confirm Password
                        </label>
                        <input 
                            id='password2'
                            type='password' 
                            name='password2' 
                            className='form-input'
                            placeholder='Enter your password'
                            ref={passwordConfirmRef}
                            required
                            />
                    </div>
                    <button disabled={loading} className="form-input-btn"
                    type='submit'>
                        Sign up
                    </button>
                    <span className="form-input-login">
                        Already have an account? Login <Link to="/login">here</Link>
                    </span>
                </form>
            </div>
        </div>
            </div>
        </div>

       
    )
}

export default FormSignup