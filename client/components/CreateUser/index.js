/**
 * Created by serj on 7/5/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ControlLabel, FormControl, FormGroup, Form} from 'react-bootstrap';
import './style.less';
import {createUser} from './../../redux/actions';
import {handleStateChange, checkUserData} from './../FunctionsStorage';

class CreateUser extends Component{

    constructor(props){
        super(props);
        this.state = {
            userData:false
        };
        this.handleStateChange = handleStateChange.bind(this, 'userData');
        this.createUser = this.createUser.bind(this);
    }

    createUser(){
        /* returns false if error */
        let user = checkUserData(this.state.userData);
        if(user && Object.keys(user).length > 0)
            this.props.createUser(user);
    }
    /* check if user is created*/
    componentWillReceiveProps(newProps){
        let {success, status, new_user={}} = newProps.users;
        if(success && status === "done" && new_user._id){
            this.setState({
                userData:{
                    username:"",
                    password:""
                }
            }, ()=>alert("User was created"))
        }
    }

    render(){
        return <div className="create_user_container">
            <div className="create_user_form">
                <h1>Create User</h1>
                <Form autoComplete="off">
                    <FormGroup>
                        <ControlLabel>Enter Username</ControlLabel>
                        <FormControl value={this.state.userData.username} autoComplete="off" name="username" onChange={this.handleStateChange} type="text" placeholder="Enter Username" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Enter Password</ControlLabel>
                        <FormControl value={this.state.userData.password} autoComplete="off" name="password" onChange={this.handleStateChange} type="password" placeholder="Enter Password" />
                    </FormGroup>
                    <Button onClick={this.createUser}>Create User</Button>
                </Form>
            </div>
        </div>
    }
}



export default connect((store)=> ({
        users:store.users
}),{createUser})(CreateUser);