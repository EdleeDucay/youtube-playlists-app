import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }

    return(
        <div className='container-wrapper'>
            <div className="loginTitle">
                <img src='img/Youtube.png' alt='YouTube-Logo' className='youtubeLogo'/>
                        Youtube Custom Playlists
                        </div>
            <div className='form-container'>
                {!isSubmitted ? <FormSignup submitForm = {submitForm}/> : <FormSuccess/>}
            </div>
        </div>
    )
}

export default Form