import React, { useContext } from 'react'
import { AccountContext } from './accountContext'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate);
    const {switchToLogin} = useContext(AccountContext)
    return(
        <div className='container'>
            
            <div className="form-content">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Sign up for an account</h1>
                    <div className="form-inputs">
                        <label htmlFor='username' className='form-label'>  
                        Username             
                        </label>
                        <input
                            id='username' 
                            type='text' 
                            name='username' 
                            className='form-input'
                            placeholder='Enter your username'
                            value={values.username}
                            onChange={handleChange}
                            />
                            {errors.username && <p>{errors.username}</p>}
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
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
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
                            value={values.password}
                            onChange={handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
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
                            value={values.password2}
                            onChange={handleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <button className="form-input-btn"
                    type='submit'>
                        Sign up
                    </button>
                    <span className="form-input-login">
                        Already have an account? Login <a href="#" onClick={switchToLogin}>here</a>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default FormSignup