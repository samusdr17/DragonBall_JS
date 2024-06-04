import React from 'react';

export default function HelloProps(props) {

    // for(let i=0; i<=3; i++) {
    //     props.textToShow.push(<li key={i}>props.textToShow</li>)
    // }
    return (
        <ul>
        <p>Hello{props.textToShow}</p>
        </ul>
    )
}