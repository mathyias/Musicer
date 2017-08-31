import React from 'react';
import { Router,
Link,
} from 'react-router';
import Register from './Register.jsx';
import Terms from './Terms.jsx';
import Privacy from './Privacy.jsx';
import RightLogin from './RightLogin.jsx';
import LoginLanding from './LoginLanding.jsx'
;
class Login extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            loader: <LoginLanding />,
        }
    }
    
    LoadRegister = () => {
        
        
        this.setState({           
            loader: <Register />,
        })
        
    }
    LoadTerms = () => {
        
        
        this.setState({           
            loader: <Terms />,
        })
        
    }
    LoadPrivacy = () => {
        
        
        this.setState({           
            loader: <Privacy />,
        })
        
    }
    LoadLogin = () => {
        
        
        this.setState({           
            loader: <RightLogin />,
        })
        
    }
    LoginLanding = () => {
        
        this.setState({           
            loader: <LoginLanding />,
        })
        
    }
    
    render() {
        
        return <div className="loginTemplate">
                    <div className='col-6'>
                      <div className='selectlogin'>    
                          <a onClick={ this.LoginLanding }><img src='../images/logo2.png' /></a>
                        <div id="links">  
                          <Link to="/" className="button fb">Sign up</Link>
                          <a onClick={ this.LoadRegister } className="button other">Sign up by use adress E-mail</a>
                        </div>    
                          <p>By registering you accept <a onClick={ this.LoadTerms } className="u">the terms of use</a> and <a onClick={ this.LoadPrivacy } className="u">privacy policy </a> Portalu</p>  
                        <div className="space"></div>
                          <p>You already have an account? <a onClick={ this.LoadLogin } className="u">Log in here</a></p>  
                    </div>
                    </div>    
                    <div className='col-6'>
                        {this.state.loader}
                    </div>
               </div>
        
    }
    
}
module.exports = Login;