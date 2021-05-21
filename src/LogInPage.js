import React from 'react'
import './LogInPage.css'
import {withRouter,Link} from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'

const responseGoogle=(response)=> {
    console.log(response);
};

class LogInPage extends React.Component{
    constructor(props){
        super(props)

    }
    
    render(){
        return(
            <div className="container-wrapper">
                <div className="loginCenter">
                    <div className="loginTitle">
                        Youtube Custom Playlists
                        </div>
                        {/* <GoogleLogin
                            clientId="1021429841005-7ufrfvm00av1uggeg9v2pbj8c1ceolm2.apps.googleusercontent.com"
                            render={renderProps => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-default">LOG IN TO YOUTUBE</button>
                            )}
                            uxMode="redirect"
                            redirectUri="http://localhost:3000/"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        /> */}
                    </div>
                </div>
        )
    }
}

export default withRouter(LogInPage);