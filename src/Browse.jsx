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
                            <div className='rightbar'>
                                <div className='right-logo'>
                                    <Link to='/browse'><img src='./images/logo-browse.png' /></Link>
                                </div>
                                <div className='menu-right'></div>
                            <div  className='settings'>
                                <div className='right-account'>
                                    <Link to='/browse/account'><img src='./images/circle.jpg' /></Link>
                                </div>
                                    <Link to="/" onClick={ this.Logout } className="logout">Log Out</Link>
                            </div>
                          </div>
                            <div className='leftbar'>
                              <div className='leftbar-sound'>


                                <div className='leftbar-sound-name'></div>
                                <div className='leftbar-sound-album'></div>
                                <div className='leftbar-sound-player'></div>


                              </div>
                            </div>

                                {this.props.children}

                        </div>
                    </div>

}

}

module.exports = withRouter(Browse);
