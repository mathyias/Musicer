import React from 'react';
import { Router,
Link,
} from 'react-router';

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
            send: true
        })
        
    }
    
    
    render() {
        
        return <div className="loginTemplate" id='margin'>
            
                <h1>LOG IN</h1>
            
                    <form className='register'>
                        <input type="text" placeholder="Username or E-mail" className={ (this.state.send && !this.state.text)?'validation':'' } value={ this.state.text } onChange={ this.Username }/>
                        <input type="password" placeholder="Password" className={ (this.state.send && !this.state.password)?'validation':''  } value={ this.state.password } onChange={ this.Password } />
                        <a className="accept link" onClick={ this.Send }>LOG IN</a>
                    </form>                                  
                    
               </div>
        
    }
    
}
module.exports = RightLogin;