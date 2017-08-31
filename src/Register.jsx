import React from 'react';
import { Router,
Link,
} from 'react-router';

class Register extends React.Component {
    
    constructor(props){
        
        super(props);
        this.state = {
            send: false,    
            validate: null,
            text: '',
            password: '',
            rePassword: '',
            email: ''
            
            
        }
        
    }
    
    Email = (event) =>{
        
        this.setState({
            
            email: event.target.value
            
        })
        
    }
    
    Username = (event) => {
        
        this.setState({
            
            text: event.target.value
            
        })
        
    }
    
    rePassword = (event) =>{
        
        this.setState({
            
            rePassword: event.target.value
            
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
        
        return <div className="loginTemplate">
            
                <h1>REGISTER</h1>
            
                    <form className='register'>
                        <input type="text" placeholder="Username" className={ (this.state.send && !this.state.text)?'validation':'' } value={ this.state.text } onChange={ this.Username }/>
                        <input type="email" placeholder="E-mail" className={ (this.state.send && !this.state.email)?'validation':'' } value={ this.state.email } onChange={ this.Email }/>
                        <input type="password" placeholder="Password" className={ (this.state.send && !this.state.password)?'validation':''  } value={ this.state.password } onChange={ this.Password } />
                        <input type="password" placeholder="Reapeat Password" className={ (this.state.send && !this.state.rePassword)?'validation':''  } value={ this.state.rePassword } onChange={ this.rePassword }/>
                        <a className="accept link" onClick={ this.Send }>Sign up</a>
                    </form>                                  
                    
               </div>
        
    }
    
}
module.exports = Register;