import React from 'react';
import { Router,
Link,
} from 'react-router';

class Account extends React.Component {
    
    render(){
        return <div className="landing">
                    <h1>Start with us today</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis elit cursus, convallis mauris placerat, ornare ante. Nam sit amet laoreet turpis, at blandit tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed facilisis ipsum at massa ultricies dapibus.</p>
                    <Link to="/login" className="logout">Join for fun</Link>
                </div>
    }
}
    
module.exports = Account;