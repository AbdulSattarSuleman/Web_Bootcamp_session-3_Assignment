import React from 'react'

function Child(props){
    return(
        <div>
        <h1> 3rd Session Assignment</h1>
        <hr/>
    <h2> {props.coursename} &nbsp; {props.instructor} &nbsp;</h2>
    <h2> {props.sessiondays} &nbsp; {props.instructor} &nbsp;</h2>
    <hr/>
    <h3> how May I help you {props.coursename}</h3>
        </div>
    );
}

export default Child;