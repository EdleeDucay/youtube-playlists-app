import React, { useContext } from 'react'
import { AccountContext } from './accountContext'
import './Form.css'

const FormLogin = ({submitForm}) => {
    const {switchToSignup} = useContext(AccountContext)

    return(
        <div className='container'>
            
            <div className="form-content">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Sign up for an account</h1>
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
                    <button className="form-input-btn"
                    type='submit'>
                        Sign up
                    </button>
                    <span className="form-input-login">
                        Already have an account? Login <a href="#" onClick={switchToSignup}>here</a>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default FormLogin