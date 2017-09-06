import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';
import Start from './Start.jsx';
import Login from './Login.jsx';
import NotFound from './NotFound.jsx';
import Register from './Register.jsx';
import Browse from './Browse.jsx';
import Account from './Account.jsx';

document.addEventListener('DOMContentLoaded', function(){
    
    class Main extends React.Component { 
        
        
     constructor(props){
        
        super(props);
        this.state = {
            
            textStart: 'Welcome',
            textPage: 'SoundPlay',
            
        }
        
    }    
        
	render(){
            
            return <div className="widget center">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                   {this.props.children}
                                </div>
                            </div>
                        </div>
                   </div>

}	

}
                                                
    
    class App extends React.Component {
        
        render(){
            
            return <Router history={hashHistory}>
                        <Route path='/' component={Main} >
                            <IndexRoute component={Start} />
                            <Route path='/login' component={Login} />
                            <Route path='/register' component={Register} />
                        </Route>    
                        <Route path='/browse' component={Browse} >
                            <IndexRoute component={NotFound} />
                            <Route path='/browse/account' component={Account} />
                        </Route>
                        <Route path='*' component={NotFound} />
                   </Router>;
    
        }
        
        
    }

	ReactDOM.render(
	
	<App />,
	document.getElementById('app')
	

	);	

});