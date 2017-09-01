import React from 'react';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory,
withRouter        
} from 'react-router';
import Login from './Login.jsx';

class Browse extends React.Component { 
    
    
    componentDidMount(){
        
        
        // pobranie wartosci
        const div = $('#app');
        
        const getSession = sessionStorage.getItem('logged');
        const sessionValue = $.parseJSON(getSession);
        
        // ----------------------------------------------------

        if (getSession != null) {
          
            div.addClass('gradient');
            
          }
    }
         
    
    Logout = () => {
        
        const div = $('#app');
        
        sessionStorage.removeItem('logged');
        
        this.props.router.push('/login');
        
        div.removeClass('gradient'); 
        
    }
        
	render(){
            
            return <div className="container">
                        <div className="row">
                            <div className="topbar">
                                   <div className='slogan'><img src='./images/logo2.png' /></div>
                                   <div className='menu'></div>
                                   <div className='account'>
                                        <div className='circle'>
                                            <img src='./images/circle.jpg' />
                                            <div className='circlesmall'>
                                                <a onClick={ this.Logout }><img src='./images/settings.svg' /></a>
                                            </div>
                                        </div>
                                   </div>
                            </div>
                              <div className="leftbar">
                                <circle>
                                   <div className='circle'>
                                        <img src='./images/album.png' />
                                   </div>
                                </circle>      
                                   
                            </div>
                            <div className="bottombar">
                                <p className='right'>Copyright© Musicer 2017</p>
                                <p className='left'>Contact | Web Design Tips & Tools | Terms of Use & Privacy | Link to Us</p>
                            </div>
                            
                                {this.props.children}
                            
                        </div>
                    </div>

}	

}
         
module.exports = withRouter(Browse);