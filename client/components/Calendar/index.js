/**
 * Created by serj on 7/7/17.
 */

import { connect } from 'react-redux'
import React, {Component} from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Form} from 'react-bootstrap';
import './style.less';
let grid = [];

//todo - build events first, with margin based on their beginning an with the height by their duration
//todo - we need in some way set up widths of these events
//todo - time - we need to display time

for(let i=0; i<=540; i+=30){
    grid.push({name:i});
}

let events = [
    {start:60, duration:60, name:"display hour"},
    {start:150, duration:60, name:"display half hour"},
];

function addShift(el) {
    let label = 0;
    let minutes = parseInt(el.name);
    if(minutes%60 == 0){
        label =8+ parseInt(minutes/60)+":00";
    }else{
        label =8+ parseInt(minutes/60) + ":30";
    }
    return label;
}

const TimeItem = ()=>{

}

class Calendar extends Component{
    render(){
        return <div className="set_height">
            <div className="calendar_container">

            </div>
            <div className="add_section">
                <Button>Add Event</Button>
            </div>
        </div>
    }
}

export default connect((store)=>({
    auth:store.auth
}))(Calendar);