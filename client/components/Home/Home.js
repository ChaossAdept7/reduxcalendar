/**
 * Created by serj on 5/23/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login, logout} from './../../redux/actions';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import './style.less';
import {Link} from 'react-router-dom';
import {handleStateChange, checkUserData} from './../FunctionsStorage';

class Home extends Component{

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            userData:{
                username:"",
                password:""
            }
        };
        this.handleStateChange = handleStateChange.bind(this, 'userData');
    }

    login(){
        /* we must be sure about non empty login and pass */
        let user = checkUserData(this.state.userData);
        if(user && Object.keys(user).length > 0)
            this.props.login(user);
    }

    logout(){
        this.props.logout();
    }

    render(){
        let logout = null;
        let home = <div className="login_section view">
            <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl onChange={this.handleStateChange} name="username" type="text" placeholder="Enter Name" />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl onChange={this.handleStateChange} name="password" type="password" placeholder="Enter Password" />
            </FormGroup>
            <Button onClick={this.login}>Login</Button>
        </div>;
        let {id=""} = this.props.auth;
        /* if user is loged in*/
        if(id.length > 0){
            logout = <Button onClick={this.logout}>Logout</Button>
            home = <FormGroup><h2>Hello, {this.props.auth.username}!</h2></FormGroup>;
        }
        return <div className="app view">
            <div className="add_user_container create_user">
                <div>
                    {logout}
                </div>
            </div>
            {home}
            <div className="add_user_container">
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return state
}
/* todo - in future we can bind only few functions */
function mapDispatchToProps(dispatch) {
    return {
        login:bindActionCreators(login, dispatch),
        logout:bindActionCreators(logout, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);