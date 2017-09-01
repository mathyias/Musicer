import React from 'react';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory,
withRouter        
} from 'react-router';
import NotFound from './NotFound.jsx';

class RightLogin extends React.Component {
    
    constructor(props){
        
        super(props);
        this.state = {
            send: false,    
            validate: null,
            text: '',
            password: '',
            
            
        }
        
    }
    
    Username = (event) => {
        
        this.setState({
            
            text: event.target.value
            
        })
        
    }
    
    
    Password = (event) => {
        
        this.setState({
            
            password: event.target.value
            
        })
        
    }
    
    
    Send = () => {
        
       event.preventDefault(); 
        
        
        this.setState({
            
            clicked: true
            
            
        })
        
        if(this.state.text.length && this.state.password.length){
            
            this.setState({
            send: true
        })
            
            this.props.router.push('/browse')
            
            const session = [
                              {
                                value: this.state.text,
                                password: this.state.password  
                              }
                            ]
            sessionStorage.setItem('logged', JSON.stringify(session));
            
            
        }
        
    }
        
    
    
    render() {
        
        return <div className="loginTemplate" id='margin'>
            
                <h1>LOG IN</h1>
            
                    <form className='register'>
                        <input type="text" placeholder="Username or E-mail" className={ (this.state.clicked && !this.state.text)?'validation':'' } value={ this.state.text } onChange={ this.Username }/>
                        <input type="password" placeholder="Password" className={ (this.state.clicked && !this.state.password)?'validation':''  } value={ this.state.password } onChange={ this.Password } />
                        <a className="accept link" onClick={ this.Send }>LOG IN</a>
                    </form>                                  
                    
               </div>
        
    }
    
}
module.exports = withRouter(RightLogin);