/**
 * Created by serj on 7/5/17.
 */
import React from 'react';
import {Route , Link, withRouter} from 'react-router-dom';
import Home from './../Home/Home'
import CreateUser from './../CreateUser'
import UsersList from './../UsersList'
import './style.less';
import Calendar from './../Calendar';
import { connect } from 'react-redux'

const MenuItem = ({url, name})=>{
    return <div className="menu_item">
        <Link to={`/${url}`}>{name}</Link>
    </div>
};

const Root = ({auth}) => (
            <div className="router_wrapper">
                <div className="menu">
                        <div className="menu_wrapper">
                        <MenuItem
                            url=""
                            name="Home"
                        />
                        <MenuItem
                            url="users-create"
                            name="Create User"
                        />
                        <MenuItem
                            url="users-list"
                            name="Users List"
                        />
                            {
                                (!auth.id)?null:<MenuItem
                                    url="calendar"
                                    name="Calendar"
                                />
                            }
                    </div>
                </div>
                <div className="app_container">
                    <Route exact path="/" component={Home} />
                    <Route path="/users-create" component={CreateUser} />
                    <Route path="/users-list" component={UsersList} />
                    <Route path="/calendar" component={Calendar} />
                </div>
            </div>
);

export default withRouter(connect((store)=>({
    auth:store.auth
}))(Root));