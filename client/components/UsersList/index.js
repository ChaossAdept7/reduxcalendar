/**
 * Created by serj on 7/5/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ControlLabel, FormControl, FormGroup, Form, Grid, Col} from 'react-bootstrap';
import './style.less';
import {getUsersList,deleteUser} from './../../redux/actions';

const UserItem = ({user, handleDelete})=>{
    return <Col className="user_item_container">
        <div className="user_item">
            {user.username}
        </div>
        <div className="remove_icon">
            <span onClick={()=>handleDelete(user._id)} className="glyphicon glyphicon-remove"/>
        </div>
    </Col>
};

class UsersList extends Component{

    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount(){
        this.props.getUsersList();
    }

    deleteUser(id){
        this.props.deleteUser(id);
    }

    componentWillReceiveProps(nextProps){
        let {deleted, success} = nextProps.users;
        if(deleted == "ok" && success){
            this.props.getUsersList();
        }
    }

    render(){
        let {users_list=[]} = this.props.users;
        return <div className="users_list_container">
            <div className="users_list">
                <Grid>
                    <h1>Users List</h1>
                    {
                        users_list.map((el, i)=>{
                            return <UserItem handleDelete={this.deleteUser} user={el} key={i} />
                        })
                    }
                </Grid>
            </div>
        </div>
    }
}

export default connect((store)=> ({
        users:store.users
}),{getUsersList, deleteUser})(UsersList);